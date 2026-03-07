"use client";

import Image from "next/image";
import { useRef, useState, useCallback, useEffect } from "react";

interface BeforeAfterSliderProps {
    beforeSrc: string;
    afterSrc: string;
    beforeAlt?: string;
    afterAlt?: string;
    beforeLabel?: string;
    afterLabel?: string;
    height?: number;
}

export default function BeforeAfterSlider({
    beforeSrc,
    afterSrc,
    beforeAlt = "Damaged artwork",
    afterAlt = "Restored artwork",
    beforeLabel = "Damaged",
    afterLabel = "Restored",
    height = 520,
}: BeforeAfterSliderProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);

    const updatePosition = useCallback(
        (clientX: number) => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            const x = clientX - rect.left;
            const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
            setPosition(pct);
        },
        []
    );

    /* Mouse events */
    const handleMouseDown = useCallback(() => setIsDragging(true), []);

    useEffect(() => {
        if (!isDragging) return;
        const onMove = (e: MouseEvent) => {
            e.preventDefault();
            updatePosition(e.clientX);
        };
        const onUp = () => setIsDragging(false);
        document.addEventListener("mousemove", onMove);
        document.addEventListener("mouseup", onUp);
        return () => {
            document.removeEventListener("mousemove", onMove);
            document.removeEventListener("mouseup", onUp);
        };
    }, [isDragging, updatePosition]);

    /* Touch events */
    const handleTouchStart = useCallback(() => setIsDragging(true), []);

    useEffect(() => {
        if (!isDragging) return;
        const onMove = (e: TouchEvent) => {
            if (e.touches[0]) updatePosition(e.touches[0].clientX);
        };
        const onEnd = () => setIsDragging(false);
        document.addEventListener("touchmove", onMove, { passive: true });
        document.addEventListener("touchend", onEnd);
        return () => {
            document.removeEventListener("touchmove", onMove);
            document.removeEventListener("touchend", onEnd);
        };
    }, [isDragging, updatePosition]);

    return (
        <div
            ref={containerRef}
            className="relative w-full rounded-2xl overflow-hidden border border-border bg-surface select-none shadow-[var(--shadow-lg)]"
            style={{ height: `clamp(320px, 50vw, ${height}px)` }}
        >
            {/* After (bottom layer) */}
            <Image
                src={afterSrc}
                alt={afterAlt}
                fill
                className="object-cover pointer-events-none"
                sizes="(max-width: 768px) 100vw, 560px"
                priority
            />

            {/* Before (clipped overlay) */}
            <div
                className="absolute inset-0"
                style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
            >
                <Image
                    src={beforeSrc}
                    alt={beforeAlt}
                    fill
                    className="object-cover pointer-events-none"
                    sizes="(max-width: 768px) 100vw, 560px"
                    priority
                />
            </div>

            {/* Divider line */}
            <div
                className="absolute top-0 bottom-0 z-10"
                style={{ left: `${position}%`, transform: "translateX(-50%)" }}
            >
                <div className="w-[2px] h-full bg-white/70" />
            </div>

            {/* Drag handle */}
            <div
                className="slider-handle absolute top-1/2 z-20 cursor-col-resize"
                style={{
                    left: `${position}%`,
                    transform: "translate(-50%, -50%)",
                }}
                onMouseDown={handleMouseDown}
                onTouchStart={handleTouchStart}
                role="separator"
                aria-valuenow={Math.round(position)}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label="Drag to compare before and after"
                tabIndex={0}
                onKeyDown={(e) => {
                    if (e.key === "ArrowLeft")
                        setPosition((p) => Math.max(0, p - 2));
                    if (e.key === "ArrowRight")
                        setPosition((p) => Math.min(100, p + 2));
                }}
            >
                <div className="w-10 h-10 rounded-full bg-accent border-2 border-white/90 shadow-[var(--shadow-md)] flex items-center justify-center">
                    {/* Grip lines */}
                    <span className="flex gap-[3px]">
                        <span className="w-[2px] h-4 bg-white/80 rounded-full" />
                        <span className="w-[2px] h-4 bg-white/80 rounded-full" />
                    </span>
                </div>
            </div>

            {/* Hidden range for fallback accessibility */}
            <input
                type="range"
                min={0}
                max={100}
                value={position}
                onChange={(e) => setPosition(Number(e.target.value))}
                className="slider-range absolute inset-0 w-full h-full z-30 opacity-0"
                aria-label="Compare before and after"
            />

            {/* Labels */}
            <span className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-lg bg-bg/70 backdrop-blur-sm text-xs font-semibold text-text-secondary uppercase tracking-wider">
                {beforeLabel}
            </span>
            <span className="absolute top-3 right-3 z-10 px-2.5 py-1 rounded-lg bg-bg/70 backdrop-blur-sm text-xs font-semibold text-accent uppercase tracking-wider">
                {afterLabel}
            </span>
        </div>
    );
}

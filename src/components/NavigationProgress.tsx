"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

export function NavigationProgress() {
    return (
        <ProgressBar
            height="4px"
            color="#1d77ff"
            options={{ showSpinner: false }}
            shallowRouting={false}
        />
    );
}

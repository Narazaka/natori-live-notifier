import SysTray from "systray";
import * as fs from "fs";
import * as path from "path";

export interface AppActions {
    close(): void;
}

export function genTray(appActions: AppActions) {
    const systray = new SysTray({
        menu: {
            icon: fs.readFileSync(path.join(__dirname, "..", "rc/nasu.ico")).toString("base64"),
            title: "ライブ名取",
            tooltip: "名取のライブが始まったらブラウザを開きます",
            items: [
                {
                    title: "終了",
                    tooltip: "終了します",
                    checked: false,
                    enabled: true,
                },
            ],
        },
        copyDir: true,
    });

    systray.onClick((action) => {
        switch (action.item.title) {
            case "終了":
                systray.kill();
                appActions.close();
        }
    });
}

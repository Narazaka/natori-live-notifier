# ライブ名取

名取のライブが始まったら問答無用でブラウザを開くツール

名取ゲリラしがちなので

## インストール

[こ↑こ↓](https://ci.appveyor.com/project/Narazaka/natori-live-notifier/build/artifacts) からzip落として解凍して適当なとこに置いてください。

## 使い方

解凍した中にある natori-live-notifier.bat をダブルクリックすると黒いウインドウ（コマンドプロンプト）が出てきて監視が始まります。
適当に最小化などしておいてください。

監視は1分おきなので多少は見逃し部分が出ます。

終了時はタスクトレイの中にあるナスをクリックして出てくるメニューから終了するか、直接コマンドプロンプトを閉じてください。

## その他

setting.jsonの中にある`"url"`を別のURLにすると別のライブも監視可能です。

チャンネルまたはユーザーのページ→「動画」→プルダウンメニューから「ライブストリーム」を選んだ時のURLを書きます。

## ライセンス

このソフトウェアにはApacheライセンスのソフトウェア puppeteer が使われています。

このソフトウェアは[Zlibライセンス](https://narazaka.net/license/Zlib?2018)で配布されています。

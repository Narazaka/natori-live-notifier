const fetch = require("node-fetch").default;
const FileSystemObject = require("fso").FileSystemObject;
const JSZip = require("jszip");

const basePath = new FileSystemObject("bin");
basePath.mkdirAllSync();
const nodejsUrl = "https://nodejs.org/dist/v10.5.0/node-v10.5.0-win-x86.zip";

async function main() {
    const res = await fetch(nodejsUrl);
    if (!res.ok) throw new Error(res.statusText);
    const zip = await JSZip.loadAsync(await res.buffer());
    basePath.join("node.exe").writeFileSync(await zip.file("node-v10.5.0-win-x86/node.exe").async("nodebuffer"));
    basePath.join("LICENSE").writeFileSync(await zip.file("node-v10.5.0-win-x86/LICENSE").async("nodebuffer"));
}

main();

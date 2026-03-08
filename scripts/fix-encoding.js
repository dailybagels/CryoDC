const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const files = [
  "app/globals.css",
  "app/page.tsx",
  "app/layout.tsx",
  "components/Contact.tsx",
  "components/Footer.tsx",
  "components/Infrastructure.tsx",
  "components/Why.tsx",
  "components/Navbar.tsx",
  "components/Hero.tsx",
  "public/__forms.html",
];

function toUtf8(buffer) {
  if (buffer.length >= 2 && buffer[0] === 0xff && buffer[1] === 0xfe) {
    return Buffer.from(buffer.toString("utf16le"), "utf8");
  }
  if (buffer.length >= 2 && buffer[0] === 0xfe && buffer[1] === 0xff) {
    return Buffer.from(buffer.toString("utf16be"), "utf8");
  }
  let str = buffer.toString("utf8");
  if (str.includes("\0")) {
    try {
      str = buffer.toString("utf16le");
    } catch {
      str = buffer.toString("utf16be");
    }
    return Buffer.from(str, "utf8");
  }
  return Buffer.from(str, "utf8");
}

files.forEach((file) => {
  const filePath = path.join(root, file);
  if (!fs.existsSync(filePath)) return;
  const buffer = fs.readFileSync(filePath);
  const utf8 = toUtf8(buffer);
  fs.writeFileSync(filePath, utf8, { encoding: "utf8" });
  console.log("UTF-8:", file);
});

console.log("Done. Commit and push.");

import fse from "fs-extra";
import path from "path";
import ejs from "ejs";
import { glob } from "glob";
import { marked } from "marked";
import fm from "front-matter";
import config from "../site.config.js";

const srcPath = "./src";
const distPath = "./public";

await fse.emptyDir(distPath);
await fse.copy(`${srcPath}/assets`, `${distPath}/assets`);

const files = await glob('**/*.@(md|ejs|html)', {
  cwd: `${srcPath}/pages`
});

for (const file of files) {
  const fileData = path.parse(file);
  const destPath = path.join(distPath, fileData.dir);

  await fse.mkdirs(destPath);

  const data = await fse.readFile(`${srcPath}/pages/${file}`, "utf-8");

  const pageData = fm(data);

    const templateConfig = {
    ...config,
    ...pageData.attributes,
    page: pageData.attributes
    };

  let pageContent;

  switch (fileData.ext) {
    case ".md":
      pageContent = marked.parse(pageData.body);
      break;

    case ".ejs":
      pageContent = ejs.render(pageData.body, templateConfig);
      break;

    default:
      pageContent = pageData.body;
  }

  const layout = pageData.attributes.layout || "default";

  const layoutContent = await ejs.renderFile(
    `${srcPath}/layouts/${layout}.ejs`,
    {
      ...templateConfig,
      body: pageContent
    }
  );

  await fse.writeFile(
    `${destPath}/${fileData.name}.html`,
    layoutContent
  );
}
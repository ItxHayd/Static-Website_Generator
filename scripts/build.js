import fse from "fs-extra" 
import { promisify } from "util"
import path from "path"
import ejs from "ejs"
import {glob} from "glob"
import { config } from "../site.config.js"

const globP = promisify(glob);
const ejsRenderFile = promisify(ejs.renderFile);

const srcPath = "./src";
const distPath = "./public";


fse.emptydirSync(distPath);

fse.copy(`${srcPath}/assets`,`${distPath}/assets`);



globP('**/*.ejs',{cwd:`${srcPath}/pages`}) // get files
    .then((files)=>{
        files.forEach((file) => {
            const fileData = path.parse(file);
            const destPath = path.join(distPath,fileData.dir);

            fse.mkdirs(destPath)
                .then(()=>{
                    return ejsRenderFile(  //get pageContent from files
                        `${srcPath}/pages/${file}`,
                        Object.assign({},config)
                    )
                })
                .then((pageContents)=>{
                    return ejsRenderFile(
                        `${srcPath}/layout.ejs`,
                        Object.assign({}, config, { body: pageContents })
                    )
                })
                .then((layoutContent)=>{
                    fse.write(
                        `${destPath}/${fileData.name}.html`,
                        layoutContent
                    )
                })
                .catch(error=>{
                    console.log(error);
                })
    });
})
.catch(error=>{
    console.log(error);
})
import Embed from "@editorjs/embed";
import Table from "@editorjs/table";
import Paragraph from "@editorjs/paragraph";
import List from "@editorjs/list";
import Warning from "@editorjs/warning";
import Code from "@editorjs/code";
import LinkTool from "@editorjs/link";
import Image from "@editorjs/image";
import Raw from "@editorjs/raw";
import Header from "@editorjs/header";
import Quote from "@editorjs/quote";
import Marker from "@editorjs/marker";
import CheckList from "@editorjs/checklist";
import Delimiter from "@editorjs/delimiter";
import InlineCode from "@editorjs/inline-code";
import SimpleImage from "@editorjs/simple-image";
import { ProveImage } from "./editorTools/Image";

function _getBase64(file, onLoadCallback) {
  return new Promise(function (resolve, reject) {
    var reader = new FileReader();

    reader.onload = function () {
      return resolve(reader.result);
    };

    reader.onerror = reject;

    reader.readAsDataURL(file);
  });
}
export const EDITOR_JS_TOOLS = {
  embed: Embed,
  table: Table, //
  marker: Marker,
  list: List, //
  warning: Warning,
  code: Code,
  linkTool: LinkTool,
//   image: {
//     class: Image,

//     config: {
//       uploader: {
//         uploadByFile(file) {
//           return _getBase64(file, function (e) {}).then((data) => {
//             return {
//               success: 1,

//               file: {
//                 url: data,
//               },
//             };
//           });
//         },
//         uploadByUrl(url) {
//           console.log("url", url);
//           // your ajax request for uploading
//           // return MyAjax.upload(file).then((data) => {
//           return new Promise((resolve, reject) => {
//             resolve({
//               success: 1,
//               file: {
//                 url: url,
//                 // any other image data you want to store, such as width, height, color, extension, etc
//               },
//             });
//           }).then((resp) => {
//             return resp;
//           });
//           // })
//         },
//       },
//     },
//   },
  raw: Raw,
  header: Header, //
  quote: Quote,
  checklist: CheckList, //
  delimiter: Delimiter, //
  inlineCode: InlineCode,
  // simpleImage: SimpleImage,
  paragraph: Paragraph, //
  image: ProveImage
};

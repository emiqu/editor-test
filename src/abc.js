export function editorJsToHtmlString(blocks) {
  let html = "";
  blocks.forEach((block) => {
    switch (block.type) {
      case "header":
        html += `<h${block.data.level} class="ce-header">${block.data.text}</h${block.data.level}>`;
        break;
      case "paragraph":
        html += `<div class="ce-paragraph cdx-block">${block.data.text}</div>`;
        break;
      case "delimiter":
        html += "<hr />";
        break;
      case "image":
        html += `<img class="img-fluid" src="${block.data.file.url}" title="${block.data.caption}" /><br /><em>${block.data.caption}</em>`;
        break;
      case "list":
        html +=
          '<div class="ce-block__content"><ol class="cdx-block cdx-list cdx-list--ordered">';
        block.data.items.forEach(function (li) {
          html += `<li class="cdx-list__item">${li}</li>`;
        });
        html += "</ol></div>";
        break;
      case "table":
        block.data.withHeadings
          ? (html += '<div class="tc-table tc-table--heading">')
          : (html += '<div class="tc-table">');
        block.data.content.forEach((row, index) => {
          html += '<div class="tc-row">';
          row.forEach((col) => {
            if (block.data.withHeadings && index === 0)
              html += `<div class="tc-cell" heading="Heading">${col}</div>`;
            else html += `<div class="tc-cell">${col}</div>`;
          });
          html += "</div>";
        });
        html += "</div>";
        break;
      case "checklist":
        html += '<div class="cdx-block cdx-checklist">';
        block.data.items.forEach(function (item) {
          if (item.checked)
            html += `<div class="cdx-checklist__item cdx-checklist__item--checked"><span class="cdx-checklist__item-checkbox"></span><div class="cdx-checklist__item-text">${item.text}</div></div>`;
          else
            html += `<div class="cdx-checklist__item"><span class="cdx-checklist__item-checkbox"></span><div class="cdx-checklist__item-text">${item.text}</div></div>`;
        });
        html += "</div>";
        break;
      case "embed":
        html += "";
        break;
      case "marker":
        html += "";
        break;
      case "warning":
        html += "";
        break;
      case "code":
        html += "";
        break;
      case "raw":
        html += "";
        break;
      case "quote":
        html += "";
        break;
      case "inlineCode":
        html += "";
        break;
      case "simpleImage":
        html += "";
        break;

      default:
        console.log("Unknown block type", block.type);
        console.log(block);
        break;
    }
  });
  return html;
}

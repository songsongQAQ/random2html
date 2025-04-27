/**
 * random2html
 * 生成随机HTML字符串的npm包
 */

// 引入random-word-slugs库来生成随机文字
import { generateSlug } from 'random-word-slugs';

/**
 * 配置选项接口
 */
export interface RandomHTMLOptions {
  /** 最少元素数量 */
  minElements?: number;
  /** 最多元素数量 */
  maxElements?: number;
  /** 最大嵌套深度 */
  depth?: number;
  /** 是否包含属性 */
  includeAttributes?: boolean;
  /** 是否包含内联CSS */
  includeCss?: boolean;
  /** 页面类型 */
  pageType?: 'random' | 'form' | 'table' | 'blog' | 'website';
}

/**
 * 可以使用的HTML元素列表
 */
const ELEMENTS: string[] = [
  'div', 'p', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
  'ul', 'ol', 'li', 'a', 'button', 'section', 'article', 
  'header', 'footer', 'nav', 'main', 'aside'
];

/**
 * 表单元素列表
 */
const FORM_ELEMENTS: string[] = [
  'form', 'input', 'textarea', 'select', 'option', 'button', 
  'label', 'fieldset', 'legend', 'datalist', 'output'
];

/**
 * 表格元素列表
 */
const TABLE_ELEMENTS: string[] = [
  'table', 'thead', 'tbody', 'tfoot', 'tr', 'th', 'td', 'caption'
];

/**
 * 元素属性定义
 */
interface AttributeMap {
  [key: string]: string[];
}

/**
 * 可以使用的属性列表
 */
const ATTRIBUTES: AttributeMap = {
  global: ['id', 'class', 'title', 'data-test'],
  a: ['href', 'target'],
  button: ['type', 'disabled'],
  input: ['type', 'placeholder', 'value', 'disabled', 'name', 'required'],
  form: ['action', 'method'],
  textarea: ['name', 'rows', 'cols', 'placeholder', 'required'],
  select: ['name', 'multiple', 'required'],
  option: ['value', 'selected'],
  label: ['for'],
  table: ['border', 'cellpadding', 'cellspacing'],
  th: ['scope', 'colspan', 'rowspan'],
  td: ['colspan', 'rowspan']
};

/**
 * 可以使用的CSS属性列表
 */
const CSS_PROPERTIES: string[] = [
  'color', 'background-color', 'font-size', 'margin', 'padding',
  'border', 'text-align', 'display', 'flex-direction', 'justify-content',
  'align-items', 'width', 'height', 'border-radius'
];

/**
 * CSS值定义
 */
interface CSSValueMap {
  [key: string]: string[];
}

/**
 * 可以使用的CSS值列表
 */
const CSS_VALUES: CSSValueMap = {
  'color': ['#FF5733', '#33FF57', '#3357FF', '#F3FF33', '#FF33F3', 'black', 'white', 'gray'],
  'background-color': ['#EFEFEF', '#FFFFFF', '#F5F5F5', '#E0E0E0', 'transparent', '#333333'],
  'font-size': ['12px', '14px', '16px', '18px', '20px', '24px', '32px'],
  'margin': ['0', '5px', '10px', '15px', '20px', '0 10px', '10px 20px'],
  'padding': ['0', '5px', '10px', '15px', '20px', '0 10px', '10px 20px'],
  'border': ['none', '1px solid #ccc', '2px solid black', '1px dashed #999'],
  'text-align': ['left', 'center', 'right', 'justify'],
  'display': ['block', 'inline', 'inline-block', 'flex', 'grid', 'none'],
  'flex-direction': ['row', 'column', 'row-reverse', 'column-reverse'],
  'justify-content': ['flex-start', 'flex-end', 'center', 'space-between', 'space-around'],
  'align-items': ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'],
  'width': ['100%', '50%', '200px', '300px', 'auto', 'fit-content'],
  'height': ['auto', '100px', '200px', '50%', '100%'],
  'border-radius': ['0', '4px', '8px', '50%', '10px']
};

/**
 * 表单元素类型
 */
const INPUT_TYPES: string[] = [
  'text', 'email', 'password', 'number', 'tel', 'date', 
  'checkbox', 'radio', 'file', 'submit', 'reset'
];

/**
 * 生成的HTML元素结果接口
 */
interface ElementResult {
  html: string;
  elementsUsed: number;
}

/**
 * 生成随机文本内容
 * @param wordCount - 要生成的单词数量
 * @returns 生成的随机文本
 */
function generateRandomText(wordCount: number = 3): string {
  try {
    return generateSlug(wordCount, {
      format: 'title'
      // 移除可能导致错误的复杂配置
    });
  } catch (error) {
    // 如果random-word-slugs出错，则使用备用方法
    const backupTexts: string[] = [
      'This is an example text',
      'Randomly generated HTML element',
      'Click here to see more',
      'Welcome to random2html',
      'This is a heading',
      'This is a paragraph',
      'This is a button',
      'Navigation link',
      'Important information',
      'Contact us',
      'Product introduction',
      'Service content',
      'Company profile',
      'Technical support',
      'Frequently asked questions'
    ];
    
    // 随机选择并组合文本
    let result = '';
    for (let i = 0; i < wordCount && i < 5; i++) {
      result += getRandomItem(backupTexts) + ' ';
    }
    return result.trim();
  }
}

/**
 * 获取随机整数，范围为[min, max]
 * @param min - 最小值（包含）
 * @param max - 最大值（包含）
 * @returns 随机整数
 */
function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * 从数组中随机选择一项
 * @param array - 选择源数组
 * @returns 随机选中的项
 */
function getRandomItem<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

/**
 * 生成随机的CSS样式
 * @param count - 要生成的CSS属性数量
 * @returns 生成的CSS样式字符串
 */
function generateRandomCSS(count: number): string {
  const styles: string[] = [];
  const usedProperties = new Set<string>();
  
  for (let i = 0; i < count; i++) {
    // 随机选择一个未使用的CSS属性
    let property: string;
    do {
      property = getRandomItem(CSS_PROPERTIES);
    } while (usedProperties.has(property) && usedProperties.size < CSS_PROPERTIES.length);
    
    if (usedProperties.has(property)) {
      // 如果所有属性都已使用，则停止
      break;
    }
    
    usedProperties.add(property);
    const value = getRandomItem(CSS_VALUES[property] || ['auto']);
    styles.push(`${property}: ${value}`);
  }
  
  return styles.join('; ');
}

/**
 * 生成随机的HTML属性
 * @param tagName - 元素标签名
 * @param includeStyle - 是否包含style属性
 * @param usedIds - 已使用的ID集合，用于确保ID唯一
 * @returns 生成的HTML属性字符串
 */
function generateRandomAttributes(tagName: string, includeStyle: boolean, usedIds: Set<string>): string {
  const attributes: string[] = [];
  const attrCount = getRandomInt(0, 3);
  const usedAttrs = new Set<string>();
  
  // 获取可用的属性列表
  const availableAttrs: string[] = [...ATTRIBUTES.global];
  if (ATTRIBUTES[tagName]) {
    availableAttrs.push(...ATTRIBUTES[tagName]);
  }
  
  for (let i = 0; i < attrCount; i++) {
    const attr = getRandomItem(availableAttrs);
    if (usedAttrs.has(attr)) continue;
    usedAttrs.add(attr);
    
    let value = '';
    if (attr === 'id') {
      // 确保ID唯一
      do {
        value = `element-${getRandomInt(1, 1000)}`;
      } while (usedIds.has(value));
      usedIds.add(value);
    } else if (attr === 'class') {
      const classes = ['container', 'wrapper', 'item', 'box', 'card', 'btn', 'text', 'title'];
      value = getRandomItem(classes);
    } else if (attr === 'href') {
      value = '#' + getRandomItem(['home', 'about', 'contact', 'product']);
    } else if (attr === 'type' && tagName === 'button') {
      value = getRandomItem(['button', 'submit', 'reset']);
    } else if (attr === 'type' && tagName === 'input') {
      value = getRandomItem(INPUT_TYPES);
    } else if (attr === 'method' && tagName === 'form') {
      value = getRandomItem(['get', 'post']);
    } else if (attr === 'action' && tagName === 'form') {
      value = '#submit';
    } else if (attr === 'placeholder') {
      value = generateRandomText(2);
    } else if (attr === 'disabled' || attr === 'required' || attr === 'selected' || attr === 'multiple') {
      return attr;
    } else if (attr === 'for' && tagName === 'label') {
      value = `input-${getRandomInt(1, 100)}`;
    } else if (attr === 'rows' && tagName === 'textarea') {
      value = getRandomInt(2, 6).toString();
    } else if (attr === 'cols' && tagName === 'textarea') {
      value = getRandomInt(20, 50).toString();
    } else if ((attr === 'colspan' || attr === 'rowspan') && (tagName === 'th' || tagName === 'td')) {
      value = getRandomInt(1, 3).toString();
    } else if (attr === 'border' && tagName === 'table') {
      value = getRandomInt(0, 1).toString();
    } else if ((attr === 'cellpadding' || attr === 'cellspacing') && tagName === 'table') {
      value = getRandomInt(0, 10).toString();
    } else {
      value = `value-${getRandomInt(1, 100)}`;
    }
    
    attributes.push(`${attr}="${value}"`);
  }
  
  // 添加样式
  if (includeStyle) {
    const cssCount = getRandomInt(1, 4);
    const css = generateRandomCSS(cssCount);
    if (css) {
      attributes.push(`style="${css}"`);
    }
  }
  
  return attributes.join(' ');
}

/**
 * 递归生成随机的HTML元素
 * @param options - 配置选项
 * @param currentDepth - 当前深度
 * @param elementsLeft - 剩余可生成的元素数量
 * @param usedIds - 已使用的ID集合
 * @returns 生成的HTML内容和使用的元素数量
 */
function generateRandomElement(
  options: Required<RandomHTMLOptions>, 
  currentDepth: number, 
  elementsLeft: number, 
  usedIds: Set<string>
): ElementResult {
  if (currentDepth > options.depth || elementsLeft <= 0) {
    return { html: '', elementsUsed: 0 };
  }
  
  const tagName = getRandomItem(ELEMENTS);
  const hasAttributes = options.includeAttributes && Math.random() > 0.3;
  const attributes = hasAttributes ? generateRandomAttributes(tagName, options.includeCss, usedIds) : '';
  
  // 是否为自闭合标签
  const isSelfClosing = ['img', 'input', 'br', 'hr'].includes(tagName);
  
  if (isSelfClosing) {
    return { 
      html: `<${tagName}${attributes ? ' ' + attributes : ''} />`, 
      elementsUsed: 1 
    };
  }
  
  // 对于非自闭合标签，决定是否有子元素
  let innerContent = '';
  let childElementsUsed = 0;
  
  // 有50%的概率添加文本内容
  const shouldAddText = Math.random() > 0.5;
  if (shouldAddText) {
    // 使用random-word-slugs生成随机文字
    innerContent = generateRandomText(getRandomInt(3, 8));
  }
  
  // 只有在当前深度小于最大深度且还有剩余元素时，才可能添加子元素
  const canHaveChildren = currentDepth < options.depth && elementsLeft > 1;
  
  if (canHaveChildren && Math.random() > 0.4) {
    // 决定要添加多少个子元素
    const maxPossibleChildren = Math.min(elementsLeft - 1, 3);
    const childCount = getRandomInt(1, maxPossibleChildren);
    
    let childrenContent = '';
    
    for (let i = 0; i < childCount && elementsLeft - childElementsUsed > 0; i++) {
      const result = generateRandomElement(
        options, 
        currentDepth + 1, 
        elementsLeft - childElementsUsed,
        usedIds
      );
      
      childrenContent += result.html;
      childElementsUsed += result.elementsUsed;
    }
    
    // 如果有子元素，将文本和子元素组合
    if (childrenContent) {
      innerContent = (shouldAddText ? innerContent + '\n' : '') + childrenContent;
    }
  }
  
  return {
    html: `<${tagName}${attributes ? ' ' + attributes : ''}>${innerContent}</${tagName}>`,
    elementsUsed: 1 + childElementsUsed
  };
}

/**
 * 生成随机表单
 * @param options - 配置选项
 * @param usedIds - 已使用的ID集合
 * @returns 生成的表单HTML
 */
function generateRandomForm(options: Required<RandomHTMLOptions>, usedIds: Set<string>): string {
  const formAttributes = options.includeAttributes ? 
    generateRandomAttributes('form', options.includeCss, usedIds) : '';
  
  let formContent = '';
  
  // 生成表单字段数量
  const fieldCount = getRandomInt(3, 8);
  
  for (let i = 0; i < fieldCount; i++) {
    const fieldType = getRandomItem([
      'text', 'email', 'password', 'number', 'textarea', 'select', 'checkbox', 'radio'
    ]);
    
    const fieldId = `input-${getRandomInt(1, 1000)}`;
    usedIds.add(fieldId);
    const fieldName = `field-${i}`;
    const fieldLabel = generateRandomText(2);
    
    formContent += `  <div class="form-group">\n`;
    formContent += `    <label for="${fieldId}">${fieldLabel}</label>\n`;
    
    if (fieldType === 'textarea') {
      const textareaAttrs = options.includeAttributes ? 
        generateRandomAttributes('textarea', options.includeCss, usedIds) : '';
      formContent += `    <textarea id="${fieldId}" name="${fieldName}"${textareaAttrs ? ' ' + textareaAttrs : ''}></textarea>\n`;
    } else if (fieldType === 'select') {
      const selectAttrs = options.includeAttributes ? 
        generateRandomAttributes('select', options.includeCss, usedIds) : '';
      formContent += `    <select id="${fieldId}" name="${fieldName}"${selectAttrs ? ' ' + selectAttrs : ''}>\n`;
      
      // 添加选项
      const optionCount = getRandomInt(3, 6);
      for (let j = 0; j < optionCount; j++) {
        const optionValue = `option-${j}`;
        const optionText = generateRandomText(1);
        const optionAttrs = options.includeAttributes ? 
          generateRandomAttributes('option', options.includeCss, usedIds) : '';
        formContent += `      <option value="${optionValue}"${optionAttrs ? ' ' + optionAttrs : ''}>${optionText}</option>\n`;
      }
      
      formContent += `    </select>\n`;
    } else if (fieldType === 'checkbox' || fieldType === 'radio') {
      const optionCount = getRandomInt(2, 4);
      for (let j = 0; j < optionCount; j++) {
        const optionId = `${fieldId}-${j}`;
        usedIds.add(optionId);
        const optionValue = `option-${j}`;
        const optionText = generateRandomText(1);
        const inputAttrs = options.includeAttributes ? 
          generateRandomAttributes('input', options.includeCss, usedIds) : '';
        
        formContent += `    <div>\n`;
        formContent += `      <input type="${fieldType}" id="${optionId}" name="${fieldName}" value="${optionValue}"${inputAttrs ? ' ' + inputAttrs : ''}>\n`;
        formContent += `      <label for="${optionId}">${optionText}</label>\n`;
        formContent += `    </div>\n`;
      }
    } else {
      // 普通输入框
      const inputAttrs = options.includeAttributes ? 
        generateRandomAttributes('input', options.includeCss, usedIds) : '';
      formContent += `    <input type="${fieldType}" id="${fieldId}" name="${fieldName}"${inputAttrs ? ' ' + inputAttrs : ''}>\n`;
    }
    
    formContent += `  </div>\n`;
  }
  
  // 添加提交按钮
  const buttonAttrs = options.includeAttributes ? 
    generateRandomAttributes('button', options.includeCss, usedIds) : '';
  const submitText = generateRandomText(1);
  formContent += `  <button type="submit"${buttonAttrs ? ' ' + buttonAttrs : ''}>${submitText}</button>\n`;
  
  return `<form${formAttributes ? ' ' + formAttributes : ''}>\n${formContent}</form>`;
}

/**
 * 生成随机表格
 * @param options - 配置选项
 * @param usedIds - 已使用的ID集合
 * @returns 生成的表格HTML
 */
function generateRandomTable(options: Required<RandomHTMLOptions>, usedIds: Set<string>): string {
  const tableAttributes = options.includeAttributes ? 
    generateRandomAttributes('table', options.includeCss, usedIds) : '';
  
  // 表格尺寸
  const rows = getRandomInt(3, 8);
  const cols = getRandomInt(3, 6);
  
  let tableContent = '';
  
  // 表头
  tableContent += '  <thead>\n    <tr>\n';
  for (let j = 0; j < cols; j++) {
    const headerText = generateRandomText(1);
    const thAttrs = options.includeAttributes ? 
      generateRandomAttributes('th', options.includeCss, usedIds) : '';
    tableContent += `      <th${thAttrs ? ' ' + thAttrs : ''}>${headerText}</th>\n`;
  }
  tableContent += '    </tr>\n  </thead>\n';
  
  // 表体
  tableContent += '  <tbody>\n';
  for (let i = 0; i < rows; i++) {
    tableContent += '    <tr>\n';
    for (let j = 0; j < cols; j++) {
      const cellText = generateRandomText(getRandomInt(1, 2));
      const tdAttrs = options.includeAttributes ? 
        generateRandomAttributes('td', options.includeCss, usedIds) : '';
      tableContent += `      <td${tdAttrs ? ' ' + tdAttrs : ''}>${cellText}</td>\n`;
    }
    tableContent += '    </tr>\n';
  }
  tableContent += '  </tbody>\n';
  
  return `<table${tableAttributes ? ' ' + tableAttributes : ''}>\n${tableContent}</table>`;
}

/**
 * 生成随机博客页面
 * @param options - 配置选项
 * @param usedIds - 已使用的ID集合
 * @returns 生成的博客页面HTML
 */
function generateBlogPage(options: Required<RandomHTMLOptions>, usedIds: Set<string>): string {
  let blogContent = '';
  
  // 标题
  const blogTitle = generateRandomText(getRandomInt(4, 7));
  const titleAttrs = options.includeAttributes ? 
    generateRandomAttributes('h1', options.includeCss, usedIds) : '';
  blogContent += `<h1${titleAttrs ? ' ' + titleAttrs : ''}>${blogTitle}</h1>\n`;
  
  // 文章元数据
  const metaAttrs = options.includeAttributes ? 
    generateRandomAttributes('div', options.includeCss, usedIds) : '';
  const author = generateRandomText(2);
  const date = new Date().toISOString().split('T')[0];
  blogContent += `<div class="meta"${metaAttrs ? ' ' + metaAttrs : ''}>Author: ${author} | Published Date: ${date}</div>\n`;
  
  // 文章内容
  const paragraphCount = getRandomInt(3, 7);
  for (let i = 0; i < paragraphCount; i++) {
    // 生成段落
    const paragraphLength = getRandomInt(3, 6);
    let paragraphContent = '';
    
    for (let j = 0; j < paragraphLength; j++) {
      const sentence = generateRandomText(getRandomInt(5, 15));
      paragraphContent += sentence + '. ';
    }
    
    const pAttrs = options.includeAttributes ? 
      generateRandomAttributes('p', options.includeCss, usedIds) : '';
    blogContent += `<p${pAttrs ? ' ' + pAttrs : ''}>${paragraphContent}</p>\n`;
    
    // 随机插入子标题
    if (i < paragraphCount - 1 && Math.random() > 0.7) {
      const subheadingLevel = getRandomInt(2, 4);
      const subheading = generateRandomText(getRandomInt(3, 6));
      const hAttrs = options.includeAttributes ? 
        generateRandomAttributes(`h${subheadingLevel}`, options.includeCss, usedIds) : '';
      blogContent += `<h${subheadingLevel}${hAttrs ? ' ' + hAttrs : ''}>${subheading}</h${subheadingLevel}>\n`;
    }
  }
  
  // 随机插入图片占位符
  if (Math.random() > 0.5) {
    const imageCaption = generateRandomText(getRandomInt(3, 6));
    const figureAttrs = options.includeAttributes ? 
      generateRandomAttributes('figure', options.includeCss, usedIds) : '';
    const imgAttrs = options.includeAttributes ? 
      generateRandomAttributes('img', options.includeCss, usedIds) : '';
    const figcaptionAttrs = options.includeAttributes ? 
      generateRandomAttributes('figcaption', options.includeCss, usedIds) : '';
    
    blogContent += `<figure${figureAttrs ? ' ' + figureAttrs : ''}>\n`;
    blogContent += `  <img src="https://via.placeholder.com/800x400" alt="${imageCaption}"${imgAttrs ? ' ' + imgAttrs : ''} />\n`;
    blogContent += `  <figcaption${figcaptionAttrs ? ' ' + figcaptionAttrs : ''}>${imageCaption}</figcaption>\n`;
    blogContent += `</figure>\n`;
  }
  
  return `<article class="blog-post">\n${blogContent}</article>`;
}

/**
 * 生成随机官网页面
 * @param options - 配置选项
 * @param usedIds - 已使用的ID集合
 * @returns 生成的官网页面HTML
 */
function generateWebsitePage(options: Required<RandomHTMLOptions>, usedIds: Set<string>): string {
  let websiteContent = '';
  
  // 生成导航栏
  const navAttrs = options.includeAttributes ? 
    generateRandomAttributes('nav', options.includeCss, usedIds) : '';
  
  websiteContent += `<header>\n`;
  websiteContent += `  <nav${navAttrs ? ' ' + navAttrs : ''}>\n`;
  websiteContent += `    <div class="logo">\n`;
  const companyName = generateRandomText(2);
  websiteContent += `      <h1>${companyName}</h1>\n`;
  websiteContent += `    </div>\n`;
  websiteContent += `    <ul class="nav-links">\n`;
  
  // 生成导航链接
  const navItems = ['Home', 'About Us', 'Products', 'Services', 'Contact'];
  for (let item of navItems) {
    const liAttrs = options.includeAttributes ? 
      generateRandomAttributes('li', options.includeCss, usedIds) : '';
    const aAttrs = options.includeAttributes ? 
      generateRandomAttributes('a', options.includeCss, usedIds) : '';
    websiteContent += `      <li${liAttrs ? ' ' + liAttrs : ''}><a href="#${item.toLowerCase().replace(/\s+/g, '-')}"${aAttrs ? ' ' + aAttrs : ''}>${item}</a></li>\n`;
  }
  
  websiteContent += `    </ul>\n`;
  websiteContent += `  </nav>\n`;
  websiteContent += `</header>\n\n`;
  
  // 生成英雄/横幅区域
  const heroAttrs = options.includeAttributes ? 
    generateRandomAttributes('section', options.includeCss, usedIds) : '';
  const heroTitle = generateRandomText(getRandomInt(3, 5));
  const heroSubtitle = generateRandomText(getRandomInt(6, 10));
  
  websiteContent += `<section class="hero"${heroAttrs ? ' ' + heroAttrs : ''}>\n`;
  websiteContent += `  <h2>${heroTitle}</h2>\n`;
  websiteContent += `  <p>${heroSubtitle}</p>\n`;
  const buttonAttrs = options.includeAttributes ? 
    generateRandomAttributes('button', options.includeCss, usedIds) : '';
  websiteContent += `  <button${buttonAttrs ? ' ' + buttonAttrs : ''}>Learn More</button>\n`;
  websiteContent += `</section>\n\n`;
  
  // 生成特色区域
  websiteContent += `<section class="features">\n`;
  websiteContent += `  <h2>Our Features</h2>\n`;
  websiteContent += `  <div class="feature-container">\n`;
  
  // 生成3-4个特色项
  const featureCount = getRandomInt(3, 4);
  for (let i = 0; i < featureCount; i++) {
    const featureTitle = generateRandomText(getRandomInt(2, 3));
    const featureDesc = generateRandomText(getRandomInt(10, 15));
    const featureAttrs = options.includeAttributes ? 
      generateRandomAttributes('div', options.includeCss, usedIds) : '';
    
    websiteContent += `    <div class="feature"${featureAttrs ? ' ' + featureAttrs : ''}>\n`;
    websiteContent += `      <div class="feature-icon">🔍</div>\n`;
    websiteContent += `      <h3>${featureTitle}</h3>\n`;
    websiteContent += `      <p>${featureDesc}</p>\n`;
    websiteContent += `    </div>\n`;
  }
  
  websiteContent += `  </div>\n`;
  websiteContent += `</section>\n\n`;
  
  // 生成关于我们区域
  const aboutAttrs = options.includeAttributes ? 
    generateRandomAttributes('section', options.includeCss, usedIds) : '';
  const aboutTitle = "About Us";
  const aboutContent = generateRandomText(getRandomInt(20, 30));
  
  websiteContent += `<section class="about"${aboutAttrs ? ' ' + aboutAttrs : ''}>\n`;
  websiteContent += `  <h2>${aboutTitle}</h2>\n`;
  websiteContent += `  <p>${aboutContent}</p>\n`;
  websiteContent += `</section>\n\n`;
  
  // 生成产品/服务区域
  websiteContent += `<section class="products">\n`;
  websiteContent += `  <h2>Our Products</h2>\n`;
  websiteContent += `  <div class="product-container">\n`;
  
  // 生成3-6个产品项
  const productCount = getRandomInt(3, 6);
  for (let i = 0; i < productCount; i++) {
    const productTitle = generateRandomText(getRandomInt(2, 3));
    const productDesc = generateRandomText(getRandomInt(8, 12));
    const productAttrs = options.includeAttributes ? 
      generateRandomAttributes('div', options.includeCss, usedIds) : '';
    
    websiteContent += `    <div class="product"${productAttrs ? ' ' + productAttrs : ''}>\n`;
    websiteContent += `      <img src="https://via.placeholder.com/300x200" alt="${productTitle}" />\n`;
    websiteContent += `      <h3>${productTitle}</h3>\n`;
    websiteContent += `      <p>${productDesc}</p>\n`;
    websiteContent += `      <a href="#product-${i}">View Details</a>\n`;
    websiteContent += `    </div>\n`;
  }
  
  websiteContent += `  </div>\n`;
  websiteContent += `</section>\n\n`;
  
  // 生成联系我们区域
  const contactAttrs = options.includeAttributes ? 
    generateRandomAttributes('section', options.includeCss, usedIds) : '';
  
  websiteContent += `<section class="contact"${contactAttrs ? ' ' + contactAttrs : ''}>\n`;
  websiteContent += `  <h2>Contact Us</h2>\n`;
  websiteContent += `  <div class="contact-container">\n`;
  websiteContent += `    <div class="contact-info">\n`;
  websiteContent += `      <p>Phone: 123-456-7890</p>\n`;
  websiteContent += `      <p>Email: info@${companyName.toLowerCase().replace(/\s+/g, '')}.com</p>\n`;
  websiteContent += `      <p>Address: ${generateRandomText(5)}</p>\n`;
  websiteContent += `    </div>\n`;
  
  // 简单的联系表单
  const formAttrs = options.includeAttributes ? 
    generateRandomAttributes('form', options.includeCss, usedIds) : '';
  
  websiteContent += `    <form${formAttrs ? ' ' + formAttrs : ''}>\n`;
  websiteContent += `      <div class="form-group">\n`;
  websiteContent += `        <label for="name">Name</label>\n`;
  websiteContent += `        <input type="text" id="name" name="name" required>\n`;
  websiteContent += `      </div>\n`;
  websiteContent += `      <div class="form-group">\n`;
  websiteContent += `        <label for="email">Email</label>\n`;
  websiteContent += `        <input type="email" id="email" name="email" required>\n`;
  websiteContent += `      </div>\n`;
  websiteContent += `      <div class="form-group">\n`;
  websiteContent += `        <label for="message">Message</label>\n`;
  websiteContent += `        <textarea id="message" name="message" rows="4" required></textarea>\n`;
  websiteContent += `      </div>\n`;
  websiteContent += `      <button type="submit">Send Message</button>\n`;
  websiteContent += `    </form>\n`;
  websiteContent += `  </div>\n`;
  websiteContent += `</section>\n\n`;
  
  // 生成页脚
  const footerAttrs = options.includeAttributes ? 
    generateRandomAttributes('footer', options.includeCss, usedIds) : '';
  
  websiteContent += `<footer${footerAttrs ? ' ' + footerAttrs : ''}>\n`;
  websiteContent += `  <div class="footer-content">\n`;
  websiteContent += `    <div class="footer-logo">\n`;
  websiteContent += `      <h3>${companyName}</h3>\n`;
  websiteContent += `    </div>\n`;
  websiteContent += `    <div class="footer-links">\n`;
  websiteContent += `      <ul>\n`;
  
  // 生成页脚链接
  for (let item of navItems) {
    websiteContent += `        <li><a href="#${item.toLowerCase().replace(/\s+/g, '-')}">${item}</a></li>\n`;
  }
  
  websiteContent += `      </ul>\n`;
  websiteContent += `    </div>\n`;
  websiteContent += `    <div class="social-links">\n`;
  websiteContent += `      <a href="#" aria-label="Facebook">📱</a>\n`;
  websiteContent += `      <a href="#" aria-label="Twitter">📱</a>\n`;
  websiteContent += `      <a href="#" aria-label="Instagram">📱</a>\n`;
  websiteContent += `      <a href="#" aria-label="LinkedIn">📱</a>\n`;
  websiteContent += `    </div>\n`;
  websiteContent += `  </div>\n`;
  websiteContent += `  <div class="copyright">\n`;
  websiteContent += `    <p>&copy; ${new Date().getFullYear()} ${companyName}. All Rights Reserved.</p>\n`;
  websiteContent += `  </div>\n`;
  websiteContent += `</footer>\n`;
  
  return websiteContent;
}

/**
 * 生成一个完整的随机HTML字符串
 * @param userOptions - 用户指定的配置选项
 * @returns 生成的HTML字符串
 */
export function generate(userOptions: RandomHTMLOptions = {}): string {
  // 默认选项
  const defaultOptions: Required<RandomHTMLOptions> = {
    minElements: 3,
    maxElements: 10,
    depth: 3,
    includeAttributes: true,
    includeCss: true,
    pageType: 'random' // 'random', 'form', 'table', 'blog', 'website'
  };
  
  // 合并用户选项和默认选项
  const options: Required<RandomHTMLOptions> = { 
    ...defaultOptions, 
    ...userOptions 
  } as Required<RandomHTMLOptions>;
  
  // 确定要生成的元素数量
  const elementsToGenerate = getRandomInt(
    options.minElements, 
    options.maxElements
  );
  
  const usedIds = new Set<string>();
  let result = '';
  let elementsGenerated = 0;
  
  // 生成根元素的容器
  result += '<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="UTF-8">\n  <title>';
  result += generateRandomText(getRandomInt(3, 6));
  result += '</title>\n';
  
  // 添加一些基本样式
  if (options.includeCss) {
    result += '  <style>\n';
    result += '    body { font-family: Arial, sans-serif; line-height: 1.6; margin: 0; padding: 0; }\n';
    result += '    .container { max-width: 1200px; margin: 0 auto; padding: 0 15px; }\n';
    result += '    .form-group { margin-bottom: 15px; }\n';
    result += '    label { display: block; margin-bottom: 5px; }\n';
    result += '    input, select, textarea { width: 100%; padding: 8px; box-sizing: border-box; }\n';
    result += '    button { padding: 10px 15px; background: #4CAF50; color: white; border: none; cursor: pointer; }\n';
    result += '    table { border-collapse: collapse; width: 100%; }\n';
    result += '    th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }\n';
    result += '    th { background-color: #f2f2f2; }\n';
    result += '    .blog-post { max-width: 800px; margin: 0 auto; }\n';
    result += '    .meta { color: #666; margin-bottom: 20px; }\n';
    result += '    figure { margin: 20px 0; }\n';
    result += '    figcaption { font-style: italic; text-align: center; }\n';
    
    // 添加官网样式
    if (options.pageType === 'website') {
      result += '    /* 官网样式 */\n';
      result += '    header { background-color: #f8f9fa; padding: 20px 0; }\n';
      result += '    nav { display: flex; justify-content: space-between; align-items: center; max-width: 1200px; margin: 0 auto; padding: 0 15px; }\n';
      result += '    .logo h1 { margin: 0; font-size: 24px; }\n';
      result += '    .nav-links { display: flex; list-style: none; margin: 0; padding: 0; }\n';
      result += '    .nav-links li { margin-left: 20px; }\n';
      result += '    .nav-links a { text-decoration: none; color: #333; }\n';
      result += '    .hero { text-align: center; padding: 80px 20px; background-color: #e9ecef; }\n';
      result += '    .hero h2 { font-size: 36px; margin-bottom: 20px; }\n';
      result += '    .hero p { font-size: 18px; margin-bottom: 30px; max-width: 600px; margin-left: auto; margin-right: auto; }\n';
      result += '    section { padding: 60px 20px; }\n';
      result += '    section h2 { text-align: center; margin-bottom: 40px; }\n';
      result += '    .feature-container, .product-container { display: flex; flex-wrap: wrap; justify-content: space-between; max-width: 1200px; margin: 0 auto; }\n';
      result += '    .feature, .product { flex: 0 0 calc(33.333% - 30px); margin-bottom: 30px; padding: 20px; border-radius: 5px; box-shadow: 0 0 15px rgba(0,0,0,0.1); text-align: center; }\n';
      result += '    .feature-icon { font-size: 36px; margin-bottom: 15px; }\n';
      result += '    .product img { max-width: 100%; height: auto; border-radius: 5px; margin-bottom: 15px; }\n';
      result += '    .about { background-color: #f8f9fa; text-align: center; }\n';
      result += '    .about p { max-width: 800px; margin: 0 auto; }\n';
      result += '    .contact-container { display: flex; flex-wrap: wrap; justify-content: space-between; max-width: 1200px; margin: 0 auto; }\n';
      result += '    .contact-info, .contact form { flex: 0 0 calc(50% - 30px); }\n';
      result += '    footer { background-color: #343a40; color: white; padding: 40px 20px 20px; }\n';
      result += '    .footer-content { display: flex; flex-wrap: wrap; justify-content: space-between; max-width: 1200px; margin: 0 auto; margin-bottom: 20px; }\n';
      result += '    .footer-logo, .footer-links, .social-links { flex: 1; margin-bottom: 20px; }\n';
      result += '    .footer-links ul { list-style: none; padding: 0; }\n';
      result += '    .footer-links li { margin-bottom: 10px; }\n';
      result += '    .footer-links a { color: white; text-decoration: none; }\n';
      result += '    .social-links a { color: white; font-size: 20px; margin-right: 10px; text-decoration: none; }\n';
      result += '    .copyright { text-align: center; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.1); max-width: 1200px; margin: 0 auto; }\n';
      result += '    /* 响应式设计 */\n';
      result += '    @media (max-width: 768px) {\n';
      result += '      .feature, .product { flex: 0 0 calc(50% - 20px); }\n';
      result += '      .contact-info, .contact form { flex: 0 0 100%; }\n';
      result += '    }\n';
      result += '    @media (max-width: 480px) {\n';
      result += '      .feature, .product { flex: 0 0 100%; }\n';
      result += '      nav { flex-direction: column; }\n';
      result += '      .nav-links { margin-top: 20px; }\n';
      result += '      .nav-links li { margin: 0 10px; }\n';
      result += '    }\n';
    }
    
    result += '  </style>\n';
  }
  
  result += '</head>\n<body>\n';
  
  // 根据页面类型生成不同的内容
  if (options.pageType === 'form') {
    // 生成表单页面
    result += '<div class="container">\n';
    result += generateRandomForm(options, usedIds);
    result += '</div>\n';
  } else if (options.pageType === 'table') {
    // 生成表格页面
    result += '<div class="container">\n';
    result += generateRandomTable(options, usedIds);
    result += '</div>\n';
  } else if (options.pageType === 'blog') {
    // 生成博客页面
    result += '<div class="container">\n';
    result += generateBlogPage(options, usedIds);
    result += '</div>\n';
  } else if (options.pageType === 'website') {
    // 生成官网页面
    result += generateWebsitePage(options, usedIds);
  } else {
    // 生成随机页面
    result += '<div class="container">\n';
    // 生成多个顶级元素，直到达到指定的元素数量
    while (elementsGenerated < elementsToGenerate) {
      const { html, elementsUsed } = generateRandomElement(
        options, 
        1, 
        elementsToGenerate - elementsGenerated,
        usedIds
      );
      
      if (html) {
        result += '  ' + html + '\n';
        elementsGenerated += elementsUsed;
      } else {
        // 如果没有生成有效的HTML，则中断循环以避免无限循环
        break;
      }
    }
    result += '</div>\n';
  }
  
  result += '</body>\n</html>';
  
  return result;
}

// 导出
export default { generate }; 
# random2html

[English](#english-version) | [中文](#中文版)

<a name="中文版"></a>
## 中文版

一个简单的npm包，用于生成随机的HTML字符串。使用random-word-slugs库生成随机文字，支持生成常见的页面布局如表单、表格、博客页面和网站页面。完全使用TypeScript编写，提供完整的类型定义。

### 安装

```bash
npm install random2html
```

### 使用方法

#### JavaScript

```javascript
const randomHTML = require('random2html');

// 生成默认随机HTML
const html = randomHTML.generate();
console.log(html);

// 自定义设置
const customHTML = randomHTML.generate({
  minElements: 5,     // 最少元素数量
  maxElements: 10,    // 最多元素数量
  depth: 3,           // 最大嵌套深度
  includeAttributes: true, // 是否包含属性
  includeCss: true,   // 是否包含内联CSS
  pageType: 'random'  // 页面类型：'random'、'form'、'table'、'blog'、'website'
});
console.log(customHTML);
```

#### TypeScript

```typescript
import randomHTML, { RandomHTMLOptions } from 'random2html';

// 生成默认随机HTML
const html = randomHTML.generate();
console.log(html);

// 使用类型化的选项
const options: RandomHTMLOptions = {
  minElements: 5,
  maxElements: 10,
  depth: 3,
  includeAttributes: true,
  includeCss: true,
  pageType: 'form'  // 类型安全：只能是 'random'、'form'、'table'、'blog'、'website'
};

const customHTML = randomHTML.generate(options);
console.log(customHTML);

// 生成表单页面
const formHTML = randomHTML.generate({
  pageType: 'form'
});
console.log(formHTML);

// 生成表格页面
const tableHTML = randomHTML.generate({
  pageType: 'table'
});
console.log(tableHTML);

// 生成博客页面
const blogHTML = randomHTML.generate({
  pageType: 'blog'
});
console.log(blogHTML);

// 生成网站页面
const websiteHTML = randomHTML.generate({
  pageType: 'website'
});
console.log(websiteHTML);
```

### API

#### RandomHTMLOptions 接口

```typescript
interface RandomHTMLOptions {
  /** 最少元素数量，默认为3 */
  minElements?: number;
  /** 最多元素数量，默认为10 */
  maxElements?: number;
  /** 最大嵌套深度，默认为3 */
  depth?: number;
  /** 是否包含属性，默认为true */
  includeAttributes?: boolean;
  /** 是否包含内联CSS，默认为true */
  includeCss?: boolean;
  /** 页面类型，默认为'random' */
  pageType?: 'random' | 'form' | 'table' | 'blog' | 'website';
}
```

#### generate(options?: RandomHTMLOptions): string

生成随机HTML字符串。

**参数:**

- `options` (可选): 配置选项对象
  - `minElements` (数字): 最少生成的HTML元素数量，默认为3
  - `maxElements` (数字): 最多生成的HTML元素数量，默认为10
  - `depth` (数字): 元素嵌套的最大深度，默认为3
  - `includeAttributes` (布尔值): 是否在元素中包含随机属性，默认为true
  - `includeCss` (布尔值): 是否包含内联CSS样式，默认为true
  - `pageType` (字符串): 生成的页面类型，可选值为'random'、'form'、'table'、'blog'、'website'，默认为'random'

**返回值:**

- (字符串): 生成的随机HTML字符串

### 页面类型

#### random

生成随机HTML元素结构的页面。

#### form

生成带有随机表单字段的表单页面，包括不同类型的输入框、文本区域、选择框等。

#### table

生成随机表格，包含随机行数和列数，以及随机生成的表头和单元格数据。

#### blog

生成博客页面结构，包括标题、作者信息、发布日期、段落内容、子标题和图片等。

#### website

生成完整的网站结构，包括导航、英雄部分、特色功能、产品展示、联系表单和页脚。

### 示例

#### 基本示例

```typescript
import randomHTML from 'random2html';

// 生成一个简单的HTML结构
const simpleHTML = randomHTML.generate({
  minElements: 2,
  maxElements: 5,
  depth: 2,
  includeAttributes: false,
  includeCss: false
});

console.log(simpleHTML);
```

#### 生成表单页面

```typescript
import randomHTML from 'random2html';

// 生成一个表单页面
const formHTML = randomHTML.generate({
  pageType: 'form',
  includeAttributes: true,
  includeCss: true
});

console.log(formHTML);
```

#### 生成网站页面

```typescript
import randomHTML from 'random2html';

// 生成一个完整的网站页面
const websiteHTML = randomHTML.generate({
  pageType: 'website'
});

console.log(websiteHTML);
```

#### 将生成的HTML保存到文件

```typescript
import randomHTML from 'random2html';
import * as fs from 'fs';

// 生成博客页面
const blogHTML = randomHTML.generate({
  pageType: 'blog'
});

// 保存到文件
fs.writeFileSync('blog.html', blogHTML);
console.log('已保存到 blog.html');
```

### 开发

```bash
# 安装依赖
npm install

# 构建项目
npm run build

# 运行测试
npm test

# 运行示例
npm run examples
```

### 许可证

MIT

---

<a name="english-version"></a>
## English Version

A simple npm package for generating random HTML strings. Uses the random-word-slugs library to generate random text, supports common page layouts such as forms, tables, blog pages, and website pages. Completely written in TypeScript with full type definitions.

### Installation

```bash
npm install random2html
```

### Usage

#### JavaScript

```javascript
const randomHTML = require('random2html');

// Generate default random HTML
const html = randomHTML.generate();
console.log(html);

// Custom settings
const customHTML = randomHTML.generate({
  minElements: 5,     // Minimum number of elements
  maxElements: 10,    // Maximum number of elements
  depth: 3,           // Maximum nesting depth
  includeAttributes: true, // Whether to include attributes
  includeCss: true,   // Whether to include inline CSS
  pageType: 'random'  // Page type: 'random', 'form', 'table', 'blog', 'website'
});
console.log(customHTML);
```

#### TypeScript

```typescript
import randomHTML, { RandomHTMLOptions } from 'random2html';

// Generate default random HTML
const html = randomHTML.generate();
console.log(html);

// Use typed options
const options: RandomHTMLOptions = {
  minElements: 5,
  maxElements: 10,
  depth: 3,
  includeAttributes: true,
  includeCss: true,
  pageType: 'form'  // Type-safe: can only be 'random', 'form', 'table', 'blog', 'website'
};

const customHTML = randomHTML.generate(options);
console.log(customHTML);

// Generate a form page
const formHTML = randomHTML.generate({
  pageType: 'form'
});
console.log(formHTML);

// Generate a table page
const tableHTML = randomHTML.generate({
  pageType: 'table'
});
console.log(tableHTML);

// Generate a blog page
const blogHTML = randomHTML.generate({
  pageType: 'blog'
});
console.log(blogHTML);

// Generate a website page
const websiteHTML = randomHTML.generate({
  pageType: 'website'
});
console.log(websiteHTML);
```

### API

#### RandomHTMLOptions Interface

```typescript
interface RandomHTMLOptions {
  /** Minimum number of elements, default is 3 */
  minElements?: number;
  /** Maximum number of elements, default is 10 */
  maxElements?: number;
  /** Maximum nesting depth, default is 3 */
  depth?: number;
  /** Whether to include attributes, default is true */
  includeAttributes?: boolean;
  /** Whether to include inline CSS, default is true */
  includeCss?: boolean;
  /** Page type, default is 'random' */
  pageType?: 'random' | 'form' | 'table' | 'blog' | 'website';
}
```

#### generate(options?: RandomHTMLOptions): string

Generates a random HTML string.

**Parameters:**

- `options` (optional): Configuration options object
  - `minElements` (number): Minimum number of HTML elements to generate, default is 3
  - `maxElements` (number): Maximum number of HTML elements to generate, default is 10
  - `depth` (number): Maximum depth of element nesting, default is 3
  - `includeAttributes` (boolean): Whether to include random attributes in elements, default is true
  - `includeCss` (boolean): Whether to include inline CSS styles, default is true
  - `pageType` (string): Type of page to generate, can be 'random', 'form', 'table', 'blog', 'website', default is 'random'

**Returns:**

- (string): The generated random HTML string

### Page Types

#### random

Generates a page with random HTML element structures.

#### form

Generates a form page with random form fields, including different types of input fields, text areas, select boxes, etc.

#### table

Generates a random table with random numbers of rows and columns, as well as randomly generated headers and cell data.

#### blog

Generates a blog page structure, including title, author information, publication date, paragraph content, subheadings, and images.

#### website

Generates a complete website structure, including navigation, hero section, features, products, contact form, and footer.

### Examples

#### Basic Example

```typescript
import randomHTML from 'random2html';

// Generate a simple HTML structure
const simpleHTML = randomHTML.generate({
  minElements: 2,
  maxElements: 5,
  depth: 2,
  includeAttributes: false,
  includeCss: false
});

console.log(simpleHTML);
```

#### Generate a Form Page

```typescript
import randomHTML from 'random2html';

// Generate a form page
const formHTML = randomHTML.generate({
  pageType: 'form',
  includeAttributes: true,
  includeCss: true
});

console.log(formHTML);
```

#### Generate a Website Page

```typescript
import randomHTML from 'random2html';

// Generate a complete website page
const websiteHTML = randomHTML.generate({
  pageType: 'website'
});

console.log(websiteHTML);
```

#### Save Generated HTML to a File

```typescript
import randomHTML from 'random2html';
import * as fs from 'fs';

// Generate a blog page
const blogHTML = randomHTML.generate({
  pageType: 'blog'
});

// Save to file
fs.writeFileSync('blog.html', blogHTML);
console.log('Saved to blog.html');
```

### Development

```bash
# Install dependencies
npm install

# Build project
npm run build

# Run tests
npm test

# Run examples
npm run examples
```

### License

MIT 
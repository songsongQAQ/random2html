# random-html

一个简单的npm包，用于生成随机的HTML字符串。使用random-word-slugs库生成随机文字，支持生成常见的页面布局如表单、表格和博客页面。完全使用TypeScript编写，提供完整的类型定义。

## 安装

```bash
npm install random-html
```

## 使用方法

### JavaScript

```javascript
const randomHTML = require('random-html');

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
  pageType: 'random'  // 页面类型：'random'、'form'、'table'或'blog'
});
console.log(customHTML);
```

### TypeScript

```typescript
import randomHTML, { RandomHTMLOptions } from 'random-html';

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
  pageType: 'form'  // 类型安全：只能是 'random'、'form'、'table' 或 'blog'
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
```

## API

### RandomHTMLOptions 接口

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
  pageType?: 'random' | 'form' | 'table' | 'blog';
}
```

### generate(options?: RandomHTMLOptions): string

生成随机HTML字符串。

**参数:**

- `options` (可选): 配置选项对象
  - `minElements` (数字): 最少生成的HTML元素数量，默认为3
  - `maxElements` (数字): 最多生成的HTML元素数量，默认为10
  - `depth` (数字): 元素嵌套的最大深度，默认为3
  - `includeAttributes` (布尔值): 是否在元素中包含随机属性，默认为true
  - `includeCss` (布尔值): 是否包含内联CSS样式，默认为true
  - `pageType` (字符串): 生成的页面类型，可选值为'random'、'form'、'table'或'blog'，默认为'random'

**返回值:**

- (字符串): 生成的随机HTML字符串

## 页面类型

### random

生成随机HTML元素结构的页面。

### form

生成带有随机表单字段的表单页面，包括不同类型的输入框、文本区域、选择框等。

### table

生成随机表格，包含随机行数和列数，以及随机生成的表头和单元格数据。

### blog

生成博客页面结构，包括标题、作者信息、发布日期、段落内容、子标题和图片等。

## 示例

### 基本示例

```typescript
import randomHTML from 'random-html';

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

### 生成表单页面

```typescript
import randomHTML from 'random-html';

// 生成一个表单页面
const formHTML = randomHTML.generate({
  pageType: 'form',
  includeAttributes: true,
  includeCss: true
});

console.log(formHTML);
```

### 将生成的HTML保存到文件

```typescript
import randomHTML from 'random-html';
import * as fs from 'fs';

// 生成博客页面
const blogHTML = randomHTML.generate({
  pageType: 'blog'
});

// 保存到文件
fs.writeFileSync('blog.html', blogHTML);
console.log('已保存到 blog.html');
```

## 开发

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

## 许可证

MIT 
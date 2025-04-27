/**
 * random-html 功能示例 (TypeScript)
 */

import * as fs from 'fs';
import * as path from 'path';
import randomHTML, { RandomHTMLOptions } from '../src/index';

// 生成并保存不同类型的页面
function generateAndSaveExample(pageType: 'random' | 'form' | 'table' | 'blog', filename: string): void {
  console.log(`生成 ${pageType} 页面...`);
  
  const options: RandomHTMLOptions = {
    pageType: pageType,
    includeAttributes: true,
    includeCss: true
  };
  
  if (pageType === 'random') {
    options.minElements = 5;
    options.maxElements = 10;
    options.depth = 3;
  }
  
  const html = randomHTML.generate(options);
  
  // 确保输出目录存在
  const dir = path.dirname(filename);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  // 保存到文件
  fs.writeFileSync(filename, html);
  console.log(`已保存到 ${filename}`);
  console.log('-'.repeat(50));
}

// 生成并保存各种类型的页面
generateAndSaveExample('random', path.join(__dirname, 'output', 'random.html'));
generateAndSaveExample('form', path.join(__dirname, 'output', 'form.html'));
generateAndSaveExample('table', path.join(__dirname, 'output', 'table.html'));
generateAndSaveExample('blog', path.join(__dirname, 'output', 'blog.html'));

console.log('所有示例已生成完成！');
console.log('可以在examples/output目录下查看生成的HTML文件。'); 
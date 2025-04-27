/**
 * random-html 测试文件
 */

const randomHTML = require('./index');
const assert = require('assert');

// 测试生成函数是否工作
function testGenerate() {
  console.log('测试 generate() 函数...');
  
  // 测试默认配置
  const defaultHTML = randomHTML.generate();
  assert(typeof defaultHTML === 'string', '生成的HTML应该是字符串');
  assert(defaultHTML.includes('<!DOCTYPE html>'), 'HTML应该包含DOCTYPE');
  assert(defaultHTML.includes('<html>'), 'HTML应该包含html标签');
  assert(defaultHTML.includes('<body>'), 'HTML应该包含body标签');
  
  console.log('✓ 默认配置测试通过');
  
  // 测试自定义配置
  const customOptions = {
    minElements: 1,
    maxElements: 2,
    depth: 1,
    includeAttributes: false,
    includeCss: false
  };
  
  const customHTML = randomHTML.generate(customOptions);
  assert(typeof customHTML === 'string', '生成的HTML应该是字符串');
  
  console.log('✓ 自定义配置测试通过');
  
  // 测试表单页面
  const formHTML = randomHTML.generate({ pageType: 'form' });
  assert(typeof formHTML === 'string', '生成的表单HTML应该是字符串');
  assert(formHTML.includes('<form'), '表单HTML应该包含form标签');
  assert(formHTML.includes('<input'), '表单HTML应该包含input标签');
  assert(formHTML.includes('<button'), '表单HTML应该包含button标签');
  
  console.log('✓ 表单页面测试通过');
  
  // 测试表格页面
  const tableHTML = randomHTML.generate({ pageType: 'table' });
  assert(typeof tableHTML === 'string', '生成的表格HTML应该是字符串');
  assert(tableHTML.includes('<table'), '表格HTML应该包含table标签');
  assert(tableHTML.includes('<thead'), '表格HTML应该包含thead标签');
  assert(tableHTML.includes('<tbody'), '表格HTML应该包含tbody标签');
  assert(tableHTML.includes('<tr'), '表格HTML应该包含tr标签');
  assert(tableHTML.includes('<th'), '表格HTML应该包含th标签');
  assert(tableHTML.includes('<td'), '表格HTML应该包含td标签');
  
  console.log('✓ 表格页面测试通过');
  
  // 测试博客页面
  const blogHTML = randomHTML.generate({ pageType: 'blog' });
  assert(typeof blogHTML === 'string', '生成的博客HTML应该是字符串');
  assert(blogHTML.includes('<article'), '博客HTML应该包含article标签');
  assert(blogHTML.includes('<h1'), '博客HTML应该包含h1标签');
  assert(blogHTML.includes('<p'), '博客HTML应该包含p标签');
  
  console.log('✓ 博客页面测试通过');
  
  console.log('所有测试通过!');
}

// 运行测试
testGenerate(); 
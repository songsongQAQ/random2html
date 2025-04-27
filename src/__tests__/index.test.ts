/**
 * random-html 测试文件 (TypeScript)
 */

import randomHTML, { RandomHTMLOptions } from '../index';

describe('randomHTML', () => {
  test('generate() 使用默认配置', () => {
    const defaultHTML = randomHTML.generate();
    expect(typeof defaultHTML).toBe('string');
    expect(defaultHTML).toContain('<!DOCTYPE html>');
    expect(defaultHTML).toContain('<html>');
    expect(defaultHTML).toContain('<body>');
  });

  test('generate() 使用自定义配置', () => {
    const customOptions: RandomHTMLOptions = {
      minElements: 1,
      maxElements: 2,
      depth: 1,
      includeAttributes: false,
      includeCss: false
    };
    
    const customHTML = randomHTML.generate(customOptions);
    expect(typeof customHTML).toBe('string');
  });

  test('generate() 生成表单页面', () => {
    const formHTML = randomHTML.generate({ pageType: 'form' });
    expect(typeof formHTML).toBe('string');
    expect(formHTML).toContain('<form');
    expect(formHTML).toContain('<input');
    expect(formHTML).toContain('<button');
  });

  test('generate() 生成表格页面', () => {
    const tableHTML = randomHTML.generate({ pageType: 'table' });
    expect(typeof tableHTML).toBe('string');
    expect(tableHTML).toContain('<table');
    expect(tableHTML).toContain('<thead');
    expect(tableHTML).toContain('<tbody');
    expect(tableHTML).toContain('<tr');
    expect(tableHTML).toContain('<th');
    expect(tableHTML).toContain('<td');
  });

  test('generate() 生成博客页面', () => {
    const blogHTML = randomHTML.generate({ pageType: 'blog' });
    expect(typeof blogHTML).toBe('string');
    expect(blogHTML).toContain('<article');
    expect(blogHTML).toContain('<h1');
    expect(blogHTML).toContain('<p');
  });
}); 
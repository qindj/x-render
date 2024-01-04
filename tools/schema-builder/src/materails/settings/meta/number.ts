import { mergeProps, createMeta } from '../utils';

const props = mergeProps({
  title: '其他配置',
  display: 'accordion',
  type: 'group',
  items: [
    {
      name: 'props.prefix',
      title: { label: '前缀', tip: 'prefix ｜ 前缀' },
      setter: 'StringSetter',
    },
    {
      name: 'props.addonBefore',
      title: { label: '前置标签', tip: 'addonBefore ｜ 前置标签' },
      setter: 'StringSetter',
    },
    {
      name: 'props.addonAfter',
      title: { label: '后置标签', tip: 'addonAfter ｜ 后置标签' },
      setter: 'StringSetter',
    },
    {
      name: 'props.precision',
      title: { label: '数值精度', tip: 'precision ｜ 数值精度' },
      setter: 'NumberSetter',
    },
    {
      name: 'props.step',
      title: { label: '单步步长', tip: 'step ｜ 每次改变步数，可以为小数' },
      setter: ['NumberSetter', 'StringSetter'],
    }
  ]
},
{
  name: 'defaultValue',
  title: { label: '默认值', tip: 'defaultValue | 默认值'},
  setter: 'NumberSetter'
}
);

const snippets = [
  {
    label: '数字输入框',
    screenshot: 'icon-inputNumber',
    schema: {
      componentName: 'InputNumber',
      props: {
        title: '数字输入框',
        type: 'number'
      }
    }
  }
];

export default createMeta('InputNumber', {
  title: '数字输入框',
  props,
  snippets,
  priority: 999
});



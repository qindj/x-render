import { mergeProps, createMeta, optionsMeta } from '../utils';

const props: any = mergeProps([
  optionsMeta,
  {
    title: '其他配置',
    display: 'accordion',
    type: 'group',
    items: [
      {
        name: 'props.direction',
        title: { label: '排列方向', tip: '选项的排列方向'},
        defaultValue: 'row',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: '水平',
                value: 'row',
              },
              {
                title: '垂直',
                value: 'column',
              },
            ]
          }
        }
      }
    ]
  }
], 
{
  name: 'defaultValue',
  title: { label: '默认值', tip: 'defaultValue | 默认值'},
  setter: 'JsonSetter'
});

const snippets = [
  {
    title: '点击单选',
    screenshot: 'icon-radio',
    schema: {
      componentName: 'Radio',
      props: {
        title: '点击单选',
        type: 'string',
        props: {
          options: [
            {
              label: 'A',
              value: 'A'
            },
            {
              label: 'B',
              value: 'B'
            },
            {
              label: 'C',
              value: 'C'
            }
          ]
        }
      }
    }
  }
];

export default createMeta('Radio', {
  title: '点击单选',
  props,
  snippets,
  priority: 997,
});
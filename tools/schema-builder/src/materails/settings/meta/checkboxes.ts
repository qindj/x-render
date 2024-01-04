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

const snippets = [{
  title: '点击多选',
  screenshot: 'icon-checkbox',
  schema: {
    componentName: 'Checkboxes',
    props: {
      title: '点击多选',
      type: 'array',
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
        ],
        direction: 'row'
      }
    }
  }
}];

export default createMeta('Checkboxes', {
  title: '点击多选框',
  priority: 996,
  props,
  snippets
});
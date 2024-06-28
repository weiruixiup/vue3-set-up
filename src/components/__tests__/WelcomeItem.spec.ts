// WelcomeItem.spec.js

import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import WelcomeItem from '../WelcomeItem.vue'

describe('WelcomeItem.vue', () => {
  it('renders properly', () => {
    const wrapper = mount(WelcomeItem, {
      slots: {
        icon: '<svg>Icon</svg>', // 使用 slots 插入图标
        heading: 'Test Heading', // 使用 slots 插入标题
        default: '<p>Test content</p>' // 使用默认插槽插入内容
      }
    })

    // 断言组件是否正确渲染
    expect(wrapper.find('.details').exists()).toBeTruthy()
    expect(wrapper.find('i').exists()).toBeTruthy()
    expect(wrapper.find('h3').text()).toContain('Test Heading')
    expect(wrapper.find('p').text()).toContain('Test content')
  })
})

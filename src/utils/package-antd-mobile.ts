import { Toast } from 'antd-mobile';
import { getDataType } from '@/utils/common';

// 处理数据 todo f 规范
const _dealContent = (content: any) => {
  let newContent = content;

  if (getDataType(content) === 'object') {
    newContent = JSON.stringify(content);
  }

  return newContent;
};

// 展示错误提示
const showFailToast = (content: any) => {
  Toast.show({
    content: _dealContent(content),
    icon: 'fail'
  });
};

// 展示loading提示
const showLoadingToast = (content: any) => {
  Toast.show({
    content: _dealContent(content),
    icon: 'loading'
  });
};

export {
  showFailToast,
  showLoadingToast
};

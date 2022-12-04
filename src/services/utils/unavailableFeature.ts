import { notification } from 'antd';

const unavailableFeature = () => {
  notification.info({
    message: 'Will be available in the future🤞',
  });
};

export default unavailableFeature;

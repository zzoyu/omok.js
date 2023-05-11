export default {
  install(Vue: any) {
    Vue.prototype.$modal = {
      show: (component: any, props: any) => {
        const ModalComponent = Vue.extend(component);
        const instance = new ModalComponent({
          propsData: props,
        });
        instance.$mount();
        document.body.appendChild(instance.$el);
      },
    };
  },
};

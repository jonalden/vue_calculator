import Vue from "vue";
import Router from "vue-router";
import CalculatorComponent from "@/components/CalculatorComponent";

Vue.use(Router);

export default new Router({
  // mode: history,
  routes: [
    {
      path: "/",
      name: "calculator",
      component: CalculatorComponent,
    },
  ],
});

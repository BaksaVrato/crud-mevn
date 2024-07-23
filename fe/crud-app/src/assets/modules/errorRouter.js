import { useRouter } from "vue-router";

const errorRouter = (status) => {
  if (status === 404) {
    return 'Not Found';
  } else if (status === 400) {
    return 'Internal Server Error';
  } else if (status === 500) {
    return 'Internal Server Error';
  }
};
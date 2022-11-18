import { BaseLayout } from "../components";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <BaseLayout>
      <Component {...pageProps} />
    </BaseLayout>
  );
};

export default MyApp;

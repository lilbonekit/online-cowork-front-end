import Layout from "../components/Layout";
import SEO from "../components/SEO";

export default function ErrorPage(params) {
  return (
    <SEO title="404 page">
      <div>
        <h4>404 PAGE NOT FOUND 😭</h4>
        <h5>
          Sorry, we can't find this page. But don't worry, you can continue
          browsing from our <a href="/home">homepage</a>.
        </h5>
      </div>
    </SEO>
  );
}

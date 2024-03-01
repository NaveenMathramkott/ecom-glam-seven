import Layout from "../components/layout/Layout";

const HomePage = () => {
  return (
    <Layout title={`E-com:ae shop online fashion with Glam seven`}>
      <div>
        <img
          src={
            "https://i.pinimg.com/564x/1a/cd/d9/1acdd9b45451d696bf3dd4052695e143.jpg"
          }
          alt="shoes"
          style={{
            width: "100%",
            height: "560px",
            objectFit: "cover",
          }}
        />
      </div>
    </Layout>
  );
};

export default HomePage;

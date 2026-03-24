import Comment from "../components/Comment.tsx"
import Form from "../components/Form.tsx";



function Home() {



    return (
        <div style={{ padding: "2rem" }}>
            <h1>Bienvenue sur le portfolio</h1>

            <Form></Form>

            <Comment></Comment>

        </div>
    );
}

export default Home;
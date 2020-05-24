import Layout from '../components/layout';

export default ({statusCode}) => (
    <Layout title="Error!!!">
        {statusCode ? `Could not load you user data: StatusCode ${statusCode}` : `Can't get this page, Sorry!`}
    </Layout>
);
// Edit page
import { useRouter } from 'next/router';

export default function Edit() {
    const router = useRouter();
    const { id } = router.query;

    return <div>Edit Page for ID: {id}</div>;
}
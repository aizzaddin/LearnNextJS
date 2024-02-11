import { useRouter } from 'next/router';

export default function PortfolioDetail() {
    const data = useRouter();
    console.log(data)
    return (
    <div>
        <h1>Portfolio Detail Page</h1>
        <p>Portofolio Detail : {data.query.id}</p>
    </div>
    );
}
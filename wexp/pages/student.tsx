import useRouter from 'next/router';
import useSwr from 'swr';
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function User(){
    const router = useRouter;
    const {data, error} = useSwr(
        '/api/dbcontext',
        fetcher
    );

    if(error) return <div>Failed to load</div>
    if(!data) return <div>Loading...</div>

    var html = "";

    for(var i = 0; i < data.length; i++){
        var curr = data[i];
        html+=curr.name + "\n" + curr.age + "\n" + curr.email + "\n" + curr.info;
    }
    
    return (
        html
    );
}

export default function NotificationBadge({count}){
    if(count === 0){
        return null;
    }
    return(
        <p>{count}</p>
    )
}
export default function DashboardCard({title,icon,value}){
    return(
        <div className="bg-white rounded-2xl shadow p-6 flex items-center justify-between">
            <div>
<p className="text-gray font-bold">
{title}
</p>
<p className="text-gray font-bold">
{value}
</p><p className="text-gray font-bold">
{icon}
</p>
</div>
        </div>

    )
}
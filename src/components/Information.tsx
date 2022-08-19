import { resourceLimits } from "worker_threads";

interface props{
    result: any;
}

const Information: React.FC<props> = (props) => {
    console.log(props.result)
    return(
        <div>
            <table>
                <tr>
                    <th>Information</th>
                </tr>
            {props.result.map((source: any) => {
                return(
                    <tr>
                        <td>{source}</td>
                    </tr>
                )
            })}
            </table>
        </div>
    )
}
export default Information;
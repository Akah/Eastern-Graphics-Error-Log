import React, {useState}  from 'react';
import Error    from '../error/Error';
import errors   from '../../errors.json';
import process  from '../../logProcessor';
import '../../bootstrap.min.css';

const processedLog = process(errors.data);

const ErrorLog: React.FC = () => {
    const [errorLog, setErrorLog] = useState(processedLog);
    const [criteria, setCriteria] = useState("message");

    const handleSearchChange = (e: any) => {
        if (e.target.value === "" ||  e.target.value === null || e.target.value === undefined) {
            setErrorLog(processedLog);
        } else {
            let filteredLog = errorLog.filter((obj:any) => {
                return obj[criteria].includes(e.target.value);
            });
            setErrorLog(filteredLog);
        }
    }

    const handleCriteriaChange = (e:any) => {
        if (e.target.value !== "") {
            setCriteria(e.target.value);
        }
    }

    return (
        <div className="error-log">
            <table className="table table-hover table-bordered table-sm">
                <thead className="thead-light">
                    <tr>
                        <th colSpan={4}>
                            <div className="form-row">
                                <div className="col-md-2">
                                    <select className="form-control" onChange={handleCriteriaChange}>
                                        <option value="" disabled hidden>Select Criteria</option>  
                                        <option>message</option>
                                        <option>facility</option>
                                        <option>level</option>
                                        <option>timeStamp</option>
                                    </select>
                                </div>
                                <div className="col-md-4">
                                    <input className="form-control" onChange={handleSearchChange} placeholder="Search..."></input>
                                </div>
                            </div>
                        </th>
                    </tr>
                    <tr>
                        <th scope="col">Message</th>
                        <th scope="col">Facility</th>
                        <th scope="col">Level</th>
                        <th scope="col">Timestamp</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        errorLog.map((value:any) => {
                            return <Error error={value}></Error>
                        })
                    }
                </tbody>
            </table>
        </div>
    );

    
}

export default ErrorLog;
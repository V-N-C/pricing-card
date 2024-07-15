

function Card(){
    return(
        <>
        <div className="heading"><h1>Pricing</h1></div>
        <div className="card">
        <div className="card-1">
            <div className="card-header">
                <h1 className="free">Free</h1>
                <h1 className="rupee-1">0$/month</h1>
                <hr></hr>
                <div className="card-body">
                    <ul>
                        <li>✔ Single user</li>
                        <li>✔ 5GB Storage</li>
                        <li>✔ Unlimited Public projects</li>
                        <li>✔ Community Access</li>
                        <li>✘Unlimited Private Projects</li>
                        <li>✘Dedicated phone Support</li>
                        <li>✘Free Subdomain</li> 
                        <li>✘Monthly Status reports</li>                        
                    </ul>
                    <div className="button">
                        <button>Button</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="card-2">
            <div className="card-header">
                <h1 className="plus">Plus</h1>
                <h1>9$/month</h1>
                <hr></hr>
                <div className="card-body">
                    <ul>
                        <li>✔ 5 users</li>
                        <li>✔ 5GB Storage</li>
                        <li>✔ Unlimited Public projects</li>
                        <li>✔ Community Access</li>
                        <li>✔ Unlimited Private Projects</li>
                        <li>✔ Dedicated phone Support</li>
                        <li>✔ Free Subdomain</li> 
                        <li>✘Monthly Status reports</li>                        
                    </ul>
                    <div className="button">
                        <button>Button</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="card-3">
            <div className="card-header">
                <h1 className="premium">Premium</h1>
                <h1>49$/month</h1>
                <hr></hr>
                <div className="card-body">
                    <ul>
                        <li>✔ Unlimited users</li>
                        <li>✔ 5GB Storage</li>
                        <li>✔ Unlimited Public projects</li>
                        <li>✔ Community Access</li>
                        <li>✔ Unlimited Private Projects</li>
                        <li>✔ Dedicated phone Support</li>
                        <li>✔ Unlimited Free Subdomain</li> 
                        <li>✔ Monthly Status reports</li>                        
                    </ul>
                    <div className="button">
                        <button >Button</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}

export default Card;

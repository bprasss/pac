function FindProxyForURL(url, host) {  

if (shExpMatch(url,"*.bankmega.com/*"))       {return "DIRECT";}
if (shExpMatch(url,"*.bankmega.local/*"))       {return "DIRECT";}
if (isInNet(host, "10.0.0.0", "255.0.0.0")) {return "DIRECT";} 
if (isInNet(host, "192.168.1.0", "255.255.255.0")) {return "DIRECT";} 

return "PROXY turbo-scbkt864.edge.prod.fortisase.com:11516; DIRECT"; }
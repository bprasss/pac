function FindProxyForURL(url, host) {
   // the local URLs from the domains below example.com do not need a proxy:    
  if (isInNet(host, "10.0.0.0", "255.0.0.0")) {return "DIRECT";} // -  based the server IP through proxy

   // All other requests go through port 8080 of proxy.example.com.
   return "PROXY 1.2.3.4:8087; DIRECT";  // <---  make sure that the domain should resolve to proxy IP address
   return "DIRECT";

}-

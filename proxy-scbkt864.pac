function FindProxyForURL(url, host) {
    // Define proxy
    var proxy = "PROXY turbo-scbkt864.edge.prod.fortisase.com:11516";
    var direct = "DIRECT";

    // Exclude IP 103.166.137.254
    if (isInNet(host, "103.166.137.254", "255.255.255.255")) {
        return direct;
    }

    // Exclude network 10.0.0.0/8
    if (isInNet(host, "10.0.0.0", "255.0.0.0")) {
        return direct;
    }

    // Default — use proxy
    return proxy;
}
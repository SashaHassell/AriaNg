(function () {
    'use strict';

    angular.module('ariaNg').config(['$translateProvider', function ($translateProvider) {
        $translateProvider.translations('en-US', {
            'English': 'English',
            'Error': 'Error',
            'OK': 'OK',
            'Cancel': 'Cancel',
            'True': 'True',
            'true': 'True',
            'False': 'False',
            'false': 'False',
            'New': 'New',
            'Start': 'Start',
            'Pause': 'Pause',
            'Delete': 'Delete',
            'Display Order': 'Display Order',
            'Default': 'Default',
            'By File Name': 'By File Name',
            'By File Size': 'By File Size',
            'By Completed Percent': 'By Completed Percent',
            'By Remain Time': 'By Remain Time',
            'By Download Speed': 'By Download Speed',
            'Download': 'Download',
            'Upload': 'Upload',
            'Downloading': 'Downloading',
            'Seeding': 'Seeding',
            'Waiting': 'Waiting',
            'Paused': 'Paused',
            'Completed': 'Completed',
            'Error Occurred': 'Error Occurred',
            'Removed': 'Removed',
            'Downloaded / Stopped': 'Downloaded / Stopped',
            'Settings': 'Settings',
            'AriaNg Settings': 'AriaNg Settings',
            'Aria2 Settings': 'Aria2 Settings',
            'Basic Settings': 'Basic Settings',
            'HTTP/FTP/SFTP Settings': 'HTTP/FTP/SFTP Settings',
            'HTTP Settings': 'HTTP Settings',
            'FTP/SFTP Settings': 'FTP/SFTP Settings',
            'BitTorrent/MegaLink Settings': 'BitTorrent/MegaLink Settings',
            'BitTorrent Settings': 'BitTorrent Settings',
            'MegaLink Settings': 'MegaLink Settings',
            'RPC Settings': 'RPC Settings',
            'Advanced Settings': 'Advanced Settings',
            'Aria2 Status': 'Aria2 Status',
            'File Name': 'File Name',
            'File Size': 'File Size',
            'Completed Percent': 'Percent',
            'Remain Time': 'Remain',
            'Download Speed': 'Download Speed',
            'Files': 'Files',
            'Overview': 'Overview',
            'Download Info': 'Download Info',
            'File List': 'File List',
            'BT Trackers': 'BT Trackers',
            'Tracker': 'Tracker',
            'Task Status': 'Task Status',
            'Info Hash': 'Info Hash',
            'Seeders': 'Seeders',
            'Connections': 'Connections',
            'Download Dir': 'Download Dir',
            'Language': 'Language',
            'Aria2 RPC Host': 'Aria2 RPC Host',
            'Aria2 RPC Port': 'Aria2 RPC Port',
            'Aria2 RPC Protocol': 'Aria2 RPC Protocol',
            'Global Stat Refresh Interval': 'Global Stat Refresh Interval',
            'Download Task Refresh Interval': 'Download Task Refresh Interval',
            'Aria2 Version': 'Aria2 Version',
            'Enabled Features': 'Enabled Features',
            'Toggle Navigation': 'Toggle Navigation',
            'Loading': 'Loading...',
            'More Than One Day': 'More than 1 day',
            'Unknown': 'Unknown',
            'Bytes': 'Bytes',
            'Minutes': 'Minutes',
            'Seconds': 'Seconds',
            'Milliseconds': 'Milliseconds',
            '(0 is disabled)': '(0 is disabled)',
            'Changes to the settings take effect after refreshing page.': 'Changes to the settings take effect after refreshing page.',
            'Download Path': 'Download Path',
            'The directory to store the downloaded file.': '',
            'Input File': 'Input File',
            'The input file can contain a list of URIs for aria2 to download.': '',
            'Log File': 'Log File',
            'The file name of the log file. If - is specified, log is written to stdout. If empty string("") is specified, or this option is omitted, no log is written to disk at all.': 'The file name of the log file. If - is specified, log is written to stdout. If empty string("") is specified, or this option is omitted, no log is written to disk at all.',
            'Max Concurrent Downloads': 'Max Concurrent Downloads',
            'Set the maximum number of parallel downloads for every queue item.': '',
            'Check Integrity': 'Check Integrity',
            'Check file integrity by validating piece hashes or a hash of entire file. This option has effect only in BitTorrent, Metalink downloads with checksums or HTTP(S)/FTP downloads with --checksum option.': 'Check file integrity by validating piece hashes or a hash of entire file. This option has effect only in BitTorrent, Metalink downloads with checksums or HTTP(S)/FTP downloads with --checksum option.',
            'Resume Download': 'Resume Download',
            'Continue downloading a partially downloaded file. Use this option to resume a download started by a web browser or another program which downloads files sequentially from the beginning. Currently this option is only applicable to HTTP(S)/FTP downloads.': 'Continue downloading a partially downloaded file. Use this option to resume a download started by a web browser or another program which downloads files sequentially from the beginning. Currently this option is only applicable to HTTP(S)/FTP downloads.',
            'Enable JSON-RPC/XML-RPC Server': 'Enable JSON-RPC/XML-RPC Server',
            'Enable JSON-RPC/XML-RPC server.': '',
            'Pause After Metadata Downloaded': 'Pause After Metadata Downloaded',
            'Pause downloads created as a result of metadata download. There are 3 types of metadata downloads in aria2: (1) downloading .torrent file. (2) downloading torrent metadata using magnet link. (3) downloading metalink file. These metadata downloads will generate downloads using their metadata. This option pauses these subsequent downloads. This option is effective only when --enable-rpc=true is given.': 'Pause downloads created as a result of metadata download. There are 3 types of metadata downloads in aria2: (1) downloading .torrent file. (2) downloading torrent metadata using magnet link. (3) downloading metalink file. These metadata downloads will generate downloads using their metadata. This option pauses these subsequent downloads. This option is effective only when --enable-rpc=true is given.',
            'Allow All Origin Request': 'Allow All Origin Request',
            'Add Access-Control-Allow-Origin header field with value * to the RPC response.': 'Add Access-Control-Allow-Origin header field with value * to the RPC response.',
            'Listen on All Network Interfaces': 'Listen on All Network Interfaces',
            'Listen incoming JSON-RPC/XML-RPC requests on all network interfaces. If false is given, listen only on local loopback interface.': 'Listen incoming JSON-RPC/XML-RPC requests on all network interfaces. If false is given, listen only on local loopback interface.',
            'Listen Port': 'Listen Port',
            'Specify a port number for JSON-RPC/XML-RPC server to listen to.': '',
            'Max Request Size': 'Max Request Size',
            'Set max size of JSON-RPC/XML-RPC request. If aria2 detects the request is more than SIZE bytes, it drops connection.': 'Set max size of JSON-RPC/XML-RPC request. If aria2 detects the request is more than SIZE bytes, it drops connection.',
            'Save Upload Metadata': 'Save Upload Metadata',
            'Save the uploaded torrent or metalink meta data in the directory specified by --dir option. The file name consists of SHA-1 hash hex string of meta data plus extension. For torrent, the extension is \'.torrent\'. For metalink, it is \'.meta4\'. If false is given to this option, the downloads added by aria2.addTorrent() or aria2.addMetalink() will not be saved by --save-session option.': 'Save the uploaded torrent or metalink meta data in the directory specified by --dir option. The file name consists of SHA-1 hash hex string of meta data plus extension. For torrent, the extension is \'.torrent\'. For metalink, it is \'.meta4\'. If false is given to this option, the downloads added by aria2.addTorrent() or aria2.addMetalink() will not be saved by --save-session option.',
            'Enable SSL/TLS': 'Enable SSL/TLS',
            'RPC transport will be encrypted by SSL/TLS. The RPC clients must use https scheme to access the server. For WebSocket client, use wss scheme. Use --rpc-certificate and --rpc-private-key options to specify the server certificate and private key.': 'RPC transport will be encrypted by SSL/TLS. The RPC clients must use https scheme to access the server. For WebSocket client, use wss scheme. Use --rpc-certificate and --rpc-private-key options to specify the server certificate and private key.',
            'Type is illegal!': 'Type is illegal!',
            'none': 'None',
            'http': 'Http',
            'https': 'Https',
            'ftp': 'Ftp',
            'mem': 'Memory Only',
            'plain': 'Plain',
            'arc4': 'ARC4',
            'binary': 'Binary',
            'ascii': 'ASCII',
            'debug': 'Debug',
            'info': 'Info',
            'notice': 'Notice',
            'warn': 'Warn',
            'error': 'Error'
        });
    }])
})();

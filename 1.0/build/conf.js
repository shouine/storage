/*
combined files : 

gallery/storage/1.0/conf

*/
/**
 * 工具栏配置文件
 *
 * @author luics (鬼道)
 * @date 2013-07-25
 */
//CASE js编码应该utf8
KISSY.add('gallery/storage/1.0/conf', function(S) {

    /**
     * CASE 不能使用 ks-debug，巨大的坑，多谢 @游侠 提醒
     */
    var DEBUG = location.href.indexOf('if-debug=1') > -1;
    var DEBUG_LOG = location.href.indexOf('if-debug-log=1') > -1;
    var arr = 'http://gm.mmstat.com'; // log.mmstat.com
    var MINER = 'http://log.mmstat.com/ued.1.1.2?type=9&_gm:id=storage&v=1.0';

    /**
     * 需要 Conf 的理由：
     * 1. 全局防止命名冲突
     * 2. 集中管理事件、状态值，便于形成文档，方便多人维护
     */
    var Conf = {
        DEBUG: DEBUG,
        DEBUG_LOG: DEBUG_LOG,
        // 其他配置
        SAM_PV: 1 / 1000,
        //SAM_PV: 1,
        TIMEOUT_STORAGE: 3 * 1000,
        PROXY: 'http://a.tbcdn.cn/s/kissy/gallery/storage/1.0/proxy.html',
        PROXY_TMALL: 'http://www.tmall.com/go/act/stp-tm.php',
        PROXY_TAOBAO: 'http://www.taobao.com/go/act/stp-tb.php',
        M: {
            G: MINER + '&t=g',
            P: MINER + '&t=p'
        },
        ARR: {// 黄金令箭埋点
            ST_SET: arr + '/tmallbrand.999.5',
            ST_GET: arr + '/tmallbrand.999.6',
            ST_RM: arr + '/tmallbrand.999.7',
            ST_CL: arr + '/tmallbrand.999.8'
        },
        K: {// Key
            // Store
            IFRAME: 'iframe',
            ONLOAD: 'onload',
            XD: 'xd',
            XD_TIMEOUT: 'xdTimeout',
            IFRAME_TIMEOUT: 'iframeTimeout',
            PROXY: 'proxy',
            CALLBACK_LIST: 'callbackList',
            CACHED_ACTION_LIST: 'cachedActionList',
            PROXY_READY: 'proxyReady'
        }
    };

    return Conf;
});



import { TYPE_LOG } from './constants.js'

function logger(log, type = TYPE_LOG) {
    console[type](log);
}

export default logger; // Đẩy logger ra ngoài
// 1 module chỉ export default được 1 cái
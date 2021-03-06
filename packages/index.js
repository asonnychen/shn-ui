import '../public/css/result.css'
import '../public/iconfont/iconfont.css'
import '../public/css/flags.css'
import '../public/css/shn-vue-ui-base.css'
import '../public/css/animation.scss'
import '../public/js/shn-vue-ui-base.js'

import Input from './shn-input'
import Statistic from './shn-statistic'
import ImgCard from './shn-img-card'
import Collapse from './shn-collapse'
import ElDemoBlock from './shn-el-demo-block'
import TableSimple from './shn-table-simple'
import BackTop from './shn-backtop'
import Button from './shn-button'
import FooterToolbar from './shn-footertoolbar'
import Drawer from './shn-drawer'
import Loading from './shn-loading'
import UploadImg from './shn-upload-img'
import PreviewImg from './shn-preview-img'
import Modal from './shn-modal'
import Anchor from './shn-anchor'
import AnchorLink from './shn-anchor-link'
import Divider from './shn-divider'
import MenuSimple from './shn-menu-simple'
import PulldownRefresh from './shn-pulldown-refresh'
import LoadingPage from './shn-loading-page'
import UrlParam from './shn-url-param'
import ModelMask from './shn-model-mask'
import DateRangePicker from './shn-date-range-picker'
import CountryPicker from './shn-country-picker'
import WidgetModal from './shn-widget-modal'

import VueCropper from './vue-cropper'
import VueDragResize from './vue-drag-resize'

const components = [
    Input,
    Statistic,
    ImgCard,
    Collapse,
    ElDemoBlock,
    TableSimple,
    BackTop,
    Button,
    FooterToolbar,
    Drawer,
    Loading,
    UploadImg,
    PreviewImg,
    Modal,
    Anchor,
    AnchorLink,
    Divider,
    MenuSimple,
    PulldownRefresh,
    LoadingPage,
    UrlParam,
    ModelMask,
    DateRangePicker,
    CountryPicker,
    WidgetModal,

    VueDragResize,
    VueCropper
]

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue) {
    // 判断是否安装
    if (install.installed) return
    // 遍历注册全局组件
    components.map(component => Vue.component(component.name, component))
}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
    install,
    
    // 以下是具体的组件列表
    Input,
    Statistic,
    ImgCard,
    Collapse,
    ElDemoBlock,
    TableSimple,
    BackTop,
    Button,
    FooterToolbar,
    Drawer,
    Loading,
    UploadImg,
    PreviewImg,
    Modal,
    Anchor,
    AnchorLink,
    Divider,
    MenuSimple,
    UrlParam,
    PulldownRefresh,
    LoadingPage,
    ModelMask,
    DateRangePicker,
    CountryPicker,
    WidgetModal,

    VueDragResize,
    VueCropper
}
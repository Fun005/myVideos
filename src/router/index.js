/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if false, the item will hidden in breadcrumb(default is true)
  }
**/
export const constantRouterMap = [{
        path: '/login',
        component: () =>
            import ('@/views/login/index'),
        hidden: true
    },
    {
        path: '/404',
        component: () =>
            import ('@/views/404'),
        hidden: true
    },

    {
        path: '/',
        component: Layout,
        redirect: '/dashboard',
        name: 'Dashboard',
        hidden: true,
        children: [{
            path: 'dashboard',
            meta: {
                title: '首页'
            },
            component: () =>
                import ('@/views/dashboard/index')
        }]
    },

    {
        path: '/nested',
        component: Layout,
        redirect: '/nested/menu1',
        name: 'Nested',
        hidden: true,
        meta: {
            title: 'Nested',
            icon: 'nested'
        },
        children: [{
                path: 'menu1',
                component: () =>
                    import ('@/views/nested/menu1/index'), // Parent router-view
                name: 'Menu1',
                meta: {
                    title: 'Menu1'
                },
                children: [{
                        path: 'menu1-1',
                        component: () =>
                            import ('@/views/nested/menu1/menu1-1'),
                        name: 'Menu1-1',
                        meta: {
                            title: 'Menu1-1'
                        }
                    },
                    {
                        path: 'menu1-2',
                        component: () =>
                            import ('@/views/nested/menu1/menu1-2'),
                        name: 'Menu1-2',
                        meta: {
                            title: 'Menu1-2'
                        },
                        children: [{
                                path: 'menu1-2-1',
                                component: () =>
                                    import ('@/views/nested/menu1/menu1-2/menu1-2-1'),
                                name: 'Menu1-2-1',
                                meta: {
                                    title: 'Menu1-2-1'
                                }
                            },
                            {
                                path: 'menu1-2-2',
                                component: () =>
                                    import ('@/views/nested/menu1/menu1-2/menu1-2-2'),
                                name: 'Menu1-2-2',
                                meta: {
                                    title: 'Menu1-2-2'
                                }
                            }
                        ]
                    },
                    {
                        path: 'menu1-3',
                        component: () =>
                            import ('@/views/nested/menu1/menu1-3'),
                        name: 'Menu1-3',
                        meta: {
                            title: 'Menu1-3'
                        }
                    }
                ]
            },
            {
                path: 'menu2',
                component: () =>
                    import ('@/views/nested/menu2/index'),
                meta: {
                    title: 'menu2'
                }
            }
        ]
    },

    {
        path: '/upload_video',
        name: 'UploadVideo',
        component: Layout,
        redirect: '/upload_video/upload_index',
        meta: {
            title: '视频上传'
        },
        children: [{
            path: 'upload_index',
            name: 'UploadIndex',
            hidden: true,
            component: () =>
                import ('@/views/upload_video/upload'),
            meta: {
                title: '视频上传'
            }
        }]
    },

    {
        path: '/youtube',
        name: 'Youtube',
        component: Layout,
        meta: {
            title: 'YOUTUBE下载'
        },
        redirect: '/youtube/youtube_download',
        children: [{
            path: 'youtube_download',
            name: 'YoutubeDownload',
            component: () =>
                import ('@/views/youtube/youtube_download'),
            hidden: true,
            meta: {
                title: 'YOUTUBE下载'
            }
        }]
    },

    {
        path: '/video_manage',
        name: 'VideoManage',
        component: Layout,
        redirect: '/video_manage/video_list',
        meta: {
            title: '视频管理'
        },
        children: [{
            path: 'video_list',
            name: 'VideoList',
            hidden: true,
            component: () =>
                import ('@/views/videos_manage/components/video_list'),
            meta: {
                title: '视频列表'
            }
        }, {
            path: 'edit_video',
            name: 'EditVideo',
            hidden: true,
            component: () =>
                import ('@/views/videos_manage/components/video_edit'),
            meta: {
                title: '视频管理'
            }
        }]
    },

    {
        path: '/album_mamage',
        name: 'AlbumManage',
        component: Layout,
        redirect: '/album_mamage/album_list',
        meta: {
            title: '',
            icon: ''
        },
        children: [{
            path: 'album_list',
            name: 'AlbumList',
            hiddenL: true,
            component: () =>
                import ('@/views/album_mamage/components/album_list'),
            meta: {
                title: '专辑管理'
            }
        }, {
            path: 'edit_album',
            name: 'EditAlbum',
            hidden: true,
            component: () =>
                import ('@/views/album_mamage/components/album_edit'),
            meta: {
                title: '专辑编辑'
            }
        }]
    },

    {
        path: '/channel',
        name: 'Channel',
        component: Layout,
        meta: {
            title: '频道管理'
        },
        redirect: '/channel/channel_manage',
        children: [{
            path: 'channel_manage',
            name: 'ChannelManage',
            component: () =>
                import ('@/views/channel_manage/channel'),
            hidden: true,
            meta: {
                title: ''
            }
        }]
    },

    {
        path: '/user',
        name: 'User',
        component: Layout,
        meta: {
            title: '用户管理'
        },
        redirect: '/user/user_manage',
        children: [{
            path: 'user_manage',
            name: 'UserManage',
            component: () =>
                import ('@/views/user_manage/user'),
            hidden: true,
            meta: {
                title: ''
            }
        }, {
            path: 'edit_user',
            name: 'EditUser',
            component: () =>
                import ('@/views/user_manage/edit_user'),
            hidden: true,
            meta: {
                title: ''
            }
        }]
    },

    {
        path: '*',
        redirect: '/404',
        hidden: true
    }
]

export default new Router({
    // mode: 'history', //后端支持可开
    scrollBehavior: () => ({
        y: 0
    }),
    routes: constantRouterMap
})

// スタイルの設定値を管理
export const styles = {
  // ブレークポイント
  breakpoints: {
    mobile: '767px',
    tablet: '1024px',
    desktop: '1280px'
  },
  
  // アニメーション
  animations: {
    duration: {
      fast: '0.2s',
      normal: '0.3s',
      slow: '0.5s'
    },
    easing: {
      default: 'ease',
      bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
    }
  },

  // z-index管理
  zIndex: {
    modal: 1000,
    header: 100,
    content: 1
  }
}

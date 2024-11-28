// ui.js

/**
 * @description SweetAlert2를 이용한 메시지 공통 클래스
 * @see https://sweetalert2.github.io/#usage
 * @params {Object} options - SweetAlert2 options (위 링크 참조)
 * @returns {Promise}
 */
class Message {
  static show(options) {
    if (!window.Swal) {
      console.error('SweetAlert2가 선언되지 않았습니다.')
      return
    }

    const {
      confirmButtonText = '확인',
      cancelButtonText = '취소',
      denyButtonText = '거부',
      onConfirm,
      onCancel,
      onDenied,
    } = options || {}

    // 취소, 거부 버튼 표시 여부
    const showCancelButton = Boolean(options?.cancelButtonText)
    const showDenyButton = Boolean(options?.denyButtonText)

    return window.Swal.fire({
      ...options,
      showCancelButton,
      showDenyButton,
      confirmButtonText,
      cancelButtonText,
      denyButtonText,
    }).then((result) => {
      const isConfirmed = result?.isConfirmed
      const isDenied = result?.isDenied
      const isDismissed = result?.isDismissed

      // '확인' (confirm) 클릭
      if (isConfirmed) {
        onConfirm?.()
        return
      }

      // '거부' (deny) 클릭
      if (isDenied) {
        onDenied?.()
        return
      }

      // '취소' (dismiss) 클릭
      if (isDismissed) {
        onCancel?.()
        return
      }
    })
  }
}

window.Message = Message

/**
 * @description SweetAlert2를 이용한 모달 공통 클래스
 * @see https://sweetalert2.github.io/#usage
 * @params {Object} options - SweetAlert2 options (위 링크 참조) {
 *  title: '제목',
 *  html: '내용',
 *  actions: ['확인', '취소'],
 *  onAction: (result) => { ... }
 * }
 * @returns {Promise}
 */
class Modal {
  static show(options) {
    if (!window.Swal) {
      console.error('SweetAlert2가 선언되지 않았습니다.')
      return
    }

    const _defaultClass = {
      container: 'modal-container',
      popup: 'modal-popup',
      header: 'modal-header',
      title: 'modal-title',
      closeButton: 'modal-close-button',
      htmlContainer: 'modal-html',
      actions: 'modal-actions',
    }

    // 취소, 거부 버튼 표시 여부
    const showCloseButton = true
    const showConfirmButton = Boolean(options?.confirmButtonText)
    const showCancelButton = Boolean(options?.cancelButtonText)
    const showDenyButton = Boolean(options?.denyButtonText)

    return window.Swal.fire({
      ...options,
      customClass: {
        ..._defaultClass,
        ...options?.customClass,
      },
      showCloseButton,
      showConfirmButton,
      showCancelButton,
      showDenyButton,
    }).then((result) => {
      const isConfirmed = result?.isConfirmed
      const isDenied = result?.isDenied
      const isDismissed = result?.isDismissed

      // '확인' (confirm) 클릭
      if (isConfirmed) {
        onConfirm?.()
        return
      }

      // '거부' (deny) 클릭
      if (isDenied) {
        onDenied?.()
        return
      }

      // '취소' (dismiss) 클릭
      if (isDismissed) {
        onCancel?.()
        return
      }
    })
  }
}

window.Modal = Modal

$(function () {
  $('.links-content li').on('click', function () {
    $(this).siblings().removeClass('active')
    $(this).addClass('active')
    console.log('!!!')
  })
})

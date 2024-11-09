// ui.js

class Message {
  static alert(options) {
    if (!window.Swal) {
      console.error('SweetAlert2가 window에 없습니다.')
      return
    }
    return window.Swal.fire(options)
  }

  static confirm(options) {
    if (!window.Swal) {
      console.error('SweetAlert2가 window에 없습니다.')
      return
    }
    return window.Swal.fire({
      ...options,
      showCancelButton: true,
      confirmButtonText: options.confirmButtonText || 'Confirm',
      cancelButtonText: options.cancelButtonText || 'Cancel',
    })
  }
}

// 클래스를 window 객체에 연결
window.Message = Message

window.alert('머냐고')

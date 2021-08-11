function formTest(e) {
  console.log('name:'+e.namedValues['名前'][0])
  console.log('company:'+e.namedValues['会社名'][0])
  console.log('mail:'+e.namedValues['メールアドレス'][0])


  const name = e.namedValues['名前'][0] // 名前
  const comapany = e.namedValues['会社名'][0] // 会社名
  const address = e.namedValues['メールアドレス'][0] // メールアドレス

  const title = '無料説明会にご登録完了のお知らせ'
  const message = comapany + '\n' + name + '様\n' + '\nご登録ありがとうございます。'
  GmailApp.sendEmail(address, title, message)

  // アクセストークン→ EP055IZGbYPZVdYb15OBKg5bMJUTsK2GJ1s1FkxqprC
  const token = 'EP055IZGbYPZVdYb15OBKg5bMJUTsK2GJ1s1FkxqprC'
  const options = {
    "method" : "post",
    "headers" : {
      "Authorization" : "Bearer " + token
    },
    "payload" : {
      "message" : '【新規無料説明会の登録】\n\n' + message
    }
  }
  const url = 'https://notify-api.line.me/api/notify'

  UrlFetchApp.fetch(url, options)

}

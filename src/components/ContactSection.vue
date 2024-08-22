<template>
  <section id="contact">
    <h2 class="section-title">お問い合わせ</h2>
    <p>ご質問やご相談は、以下のフォームからお気軽にお問い合わせください。</p>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">お名前</label>
        <input type="text" id="name" v-model="formData.name" required />
      </div>
      <div class="form-group">
        <label for="email">メールアドレス</label>
        <input type="email" id="email" v-model="formData.email" required />
      </div>
      <div class="form-group">
        <label for="message">メッセージ</label>
        <textarea id="message" v-model="formData.message" required></textarea>
      </div>
      <button type="submit" class="submit-button">送信</button>
    </form>
  </section>
</template>

<script>
export default {
  name: 'ContactSection',
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    submitForm() {
      alert('お問い合わせありがとうございます！');
      // フォームの送信処理をここに追加します
    }
  }
};
</script>

<style scoped>
#contact {
  padding: 2em;
  background-color: #f9f9f9;
  text-align: center;
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

form {
  max-width: 500px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

input, textarea {
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

button.submit-button {
  padding: 0.75rem 1.5rem;
  font-size: 1.2rem;
  color: #fff;
  background-color: #333;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button.submit-button:hover {
  background-color: #555;
}

/* レスポンシブデザイン */
@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }

  p {
    font-size: 1rem;
  }

  button.submit-button {
    font-size: 1rem;
  }
}
</style>

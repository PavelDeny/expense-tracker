import './styles.scss';

type Expense = {
  id: number;
  title: string;
  amount: number;
};

const form = document.getElementById('expense-form') as HTMLFormElement;
const titleInput = document.getElementById('title') as HTMLInputElement;
const amountInput = document.getElementById('amount') as HTMLInputElement;
const list = document.getElementById('expense-list') as HTMLUListElement;
const totalSpan = document.getElementById('total') as HTMLSpanElement;

let expenses: Expense[] = JSON.parse(localStorage.getItem('expenses') || '[]');
renderList();

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = titleInput.value.trim();
  const amount = parseFloat(amountInput.value);

  if (!title || isNaN(amount)) return;

  const newExpense: Expense = {
    id: Date.now(),
    title,
    amount
  };

  expenses.push(newExpense);
  localStorage.setItem('expenses', JSON.stringify(expenses));

  titleInput.value = '';
  amountInput.value = '';

  renderList();
});

function renderList() {
  list.innerHTML = '';
  let total = 0;

  expenses.forEach(exp => {
    total += exp.amount;

    const li = document.createElement('li');
    li.innerHTML = `
      ${exp.title} — ${exp.amount} грн
      <button data-id="${exp.id}">❌</button>
    `;
    list.appendChild(li);
  });

  totalSpan.textContent = total.toFixed(2);

  // Обробник на кнопки видалення
  document.querySelectorAll('button[data-id]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = +(btn as HTMLButtonElement).dataset.id!;
      expenses = expenses.filter(e => e.id !== id);
      localStorage.setItem('expenses', JSON.stringify(expenses));
      renderList();
    });
  });
}

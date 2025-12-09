{
  "zah/nim.vim",
  ft = "nim",  -- Lazy-load on Nim filetypes
  -- Optional: Add any custom config here if needed (e.g., for keymaps)
  config = function()
    -- Example: Enable jump-to-definition if you want it (from the plugin's docs)
    vim.keymap.set('n', '<M-g>', function()
      if vim.fn.exists('*GotoDefinition_' .. vim.bo.filetype) == 1 then
        vim.fn.GotoDefinition_(vim.bo.filetype)()
      else
        vim.cmd('normal! <C-]>')
      end
    end, { desc = 'Jump to definition' })
    vim.keymap.set('i', '<M-g>', '<Esc>:lua _G.JumpToDef()<CR>i', { desc = 'Jump to definition (insert mode)' })
  end,
}
